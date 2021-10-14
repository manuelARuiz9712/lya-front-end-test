
export interface ActivityInterface {
    key:string,
    name:string,
    descripcion:string,
    status:'PENDIENTE' | 'REALIZADO',
    date?: any,
    //dateUpdated:string
}