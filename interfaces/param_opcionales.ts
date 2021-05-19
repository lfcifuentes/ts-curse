interface Person {
    height:number;
    weight:number;
    name?:string;
}

function showPerson(person:Person):string {
    let media = person.height/person.weight;
    if(person.name){
        return `Name: ${person.name} media: ${media}`;
    }
    return `Media: ${media}`;
}

let p = {height:50, weight: 80}
console.log(showPerson(p));
let p_two = {height:70, weight:90, name: "Luis"}
console.log(showPerson(p_two));
