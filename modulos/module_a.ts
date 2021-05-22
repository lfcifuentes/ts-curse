export const name:string = "Luis";


export class Person {
    name:string

    constructor(_name?:string){
        if(_name){
            this.name = _name
        }
    }
}

export interface Human {
    name:string
}
export const show = (name:string):void =>{
    console.log(`your name is ${name}`);
}
