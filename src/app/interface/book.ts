export interface Book {
        id:string,
        title:string,
        author:string,
        ISBN:string,
        availability:boolean,
        issuedByUser: string | null
}
