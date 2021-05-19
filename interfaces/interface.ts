interface Persona {
    name:string;
    last_name:string;
}

function caminar(persona:Persona) :void {
    console.log(`The name is ${persona.name} ${persona.last_name}`);
}
let persona = {name:"Luis", last_name:"Cifuentes", city: "Cali"};
caminar(persona)