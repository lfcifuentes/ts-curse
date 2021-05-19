class Animal {
    public name:string;
    public len:number;

    public constructor(_name:string, _len:number){
        this.name = _name;
        this.len = _len;
    }

    public moverse() :void {
        console.log("Mover");
    }
}
const obj = new Animal("Serpiente", 2);
console.log(obj.name);
console.log(obj.len);