export interface Vehicle{
    id_vehicle?: number | string,
    name: string,
    color: string,
    description: string,
    brand: string,
    url: string,
    id_vehicle_type: number | string,
    price: number,
    body_type?: string,
}