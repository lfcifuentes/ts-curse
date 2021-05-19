interface Person {
    readonly name:string;
    readonly last_name:string;
}

let person:Person = {name:'Luis', last_name:'Cifuentes'};
// no se puede hacer 
//person.name = 'Fernando'

console.log(person.name)
