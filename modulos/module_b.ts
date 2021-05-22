import { name, Person, Human, show } from "./module_a";
import Pet from "./module_c";

console.log(name);

let person:Person = new Person("Haru")
console.log(person);
person.name = "Luis Cifuentes";
console.log(person);

const my_human:Human = {name: "Yuli"}

console.log(my_human);

show("Maylo");

const maylo:Pet = new Pet("Maylo", 1, "Crioyo") 

maylo.show();