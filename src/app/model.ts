export interface datecount{
    datetime:String,
    count:number
}
export interface url{
    _id?:any,
    longURL:string,
    short:string,
    count:number,
    time:Array<datecount>
}
export interface urlChart{
    name:String,
    value:number
}

export interface user{
    email:string,
    password:string
}
