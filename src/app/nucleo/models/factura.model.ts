export interface Invoice{
    id_invoice?: number,
    VAT?: number,
    payment_method: string,
    date: Date | string,
    id_campus?: number,
    id_user?: number,
    user_name1?: string,
    user_lastname1?: string,
    campus?: string,
    
}