class Pet {
    name:string;
    age:number;
    breed:string;

    constructor(_name:string, _age:number, _breed:string) {
        this.name = _name;
        this.age = _age;
        this.breed = _breed;
    }

    public show = () :void => {
        console.log(`Your Pet data: name: ${this.name}, age: ${this.age}, breed: ${this.breed}`);
    }
}

export default Pet;