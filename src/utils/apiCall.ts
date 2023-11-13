import { DEFAULT_APP_ID, DEFAULT_FIELDS, DEFAULT_PAGE, DEFAULT_URL } from "../constant/constant";

interface ApiCallProp {
  itemsPerPage: string;
  currentPage: number;
}
export const apiCall = async ({
  itemsPerPage,
  currentPage,
}: ApiCallProp) => {
  const url = new URL(DEFAULT_URL);

	url.searchParams.set('application_id', DEFAULT_APP_ID);
  itemsPerPage && url.searchParams.set('limit', itemsPerPage);
  url.searchParams.set('page_no', (currentPage || DEFAULT_PAGE).toString());
  url.searchParams.set('fields', DEFAULT_FIELDS);

  return fetch(url);
};
