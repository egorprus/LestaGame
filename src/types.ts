export interface MetaDataInterface {
    count: number,
    limit: number,
    page: number,
    page_total: number,
    total: number
}
  
export  interface TankInterface {
    name: string,
    tank_id: string,
    nation?: string,
    images?: {
        big_icon: string,
        contour_icon: string,
        small_icon: string
    },
    type?: string,
    tier?: number
}

export interface FilterPropertyInterface {
    name: string,
    tank_id: string
}

export interface FilterInterface {
    [property: string]: FilterPropertyInterface
}
  
export  interface ResponseRequest {
    meta: MetaDataInterface,
    status: string,
    data: {
        [property: string]: TankInterface,
    }
}

export interface ResponseFilterRequest {
    meta: MetaDataInterface,
    status: string,
    data: FilterInterface
}