

export interface IPerson {
    name:string,
    lastName:string,
    age:number,
    isStudent?:boolean 
}


export interface IStundet {
    students:IPerson[]
}

export enum optionNumber {
    first = 0,
    second = 1,
    third = 2,
}