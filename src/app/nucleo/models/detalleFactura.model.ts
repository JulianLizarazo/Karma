export interface InvoiceDetail{
    id_invoice_det?: number,
    amount: number,
    id_invoice: number,
    price: number,
    id_vehicle_detail: number,
    car_plate?: string,
    engine_num?: string,
    vehicle_model?: string,   
}