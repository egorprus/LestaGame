import { DEFAULT_FIELDS, DEFAULT_PAGE, DEFAULT_URL } from "../constant/constant";
import { FilterPropertyInterface, ResponseRequest, ResponseFilterRequest } from "../types";

export const parseName = (name: string) : string => {
    return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
};

export const getPaginatedTanksInfo = (
        itemsPerPage: number = 10,
        currentPage: number = 1,
        filtering: boolean = false,
        tankIdFilters: string = '', 
        fields: string = DEFAULT_FIELDS,
        changeResultStatus: (status: boolean) => void
    ) => {
    const limit = itemsPerPage ? `&limit=${itemsPerPage}` : '';
    const pageNumber = `&page_no=${currentPage || DEFAULT_PAGE}`;
    const field = fields ? `&fields=${fields}` : '';
    const tanksId = filtering ? `&tank_id=${tankIdFilters}` : '';

    const response = fetch(`${DEFAULT_URL + field + limit + pageNumber + tanksId}`)
        .then(res => res.json())
        .then(response => response)
        .catch(() => changeResultStatus(true))

    return response;
};

export const getFilteredList = async (
        itemsPerPage: number,
        searchValue: string,
        currentPage: number,
        isFilter: boolean,
        changeFilteredIDs: (newIDs: string) => void,
        changeResultStatus: (status: boolean) => void
    ) => {
    const filterOptions: ResponseFilterRequest = await getPaginatedTanksInfo(0, 0, false, '', 'name%2C+tank_id', changeResultStatus )

    let limitedIdList = getLimitedIdList(filterOptions, searchValue);
    let response: ResponseRequest;
    let tanks;
    
    if (limitedIdList) {
        response = await getPaginatedTanksInfo(itemsPerPage, currentPage, isFilter, limitedIdList, DEFAULT_FIELDS, changeResultStatus);
        tanks = Object.values(response.data).filter(item => item);
    } else {
        changeResultStatus(true);
        return {
            meta: null,
            data: null
        }
    }
    
    changeFilteredIDs(limitedIdList);

    return {
        ...response,
        data: tanks
    };
};

export const getLimitedIdList = (filterOptions: ResponseFilterRequest, searchValue: string): string => {
    const filterOptionsArray: FilterPropertyInterface[] = Object.values(filterOptions.data);
    const filteredList = filterOptionsArray.filter(option => parseName(option.name).indexOf(searchValue) === 0);
    let limitedIdList = '';

    if (filteredList.length) {
        limitedIdList = filteredList[0].tank_id;

        for ( let i = 1; i < filteredList.length - 1 && i < 100; i++) {
            limitedIdList = limitedIdList + `%2C${filteredList[i].tank_id}`
        }
    }
    return limitedIdList;
};

export const createPaginationButtonsIndexes = (currentPage: number, totalPages: number): number[] => {
    const minIndex: number = currentPage - 3 > 0 ? currentPage - 2 : DEFAULT_PAGE;
    const maxIndex: number = currentPage + 3 > totalPages ? totalPages : currentPage + 3;
    const length: number = maxIndex - minIndex < 5 ? maxIndex - minIndex : 5;

    const PaginationButtonsIndexes: number[] = [...Array(length)].map((item, index: number): number => index + minIndex);

    return PaginationButtonsIndexes;
}