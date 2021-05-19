class Animal {
    protected name:string;
    protected len:number;

    public constructor(_name:string, _len:number){
        this.name = _name;
        this.len = _len;
    }

    public moverse() :void {
        console.log("Mover");
    }

    public getName() :string {
        return this.name
    }
    public setName(_name:string){
        this.name = _name
    }
    public getLen() :number {
        return this.len
    }

}
const obj = new Animal("Serpiente", 2);
console.log(obj.getName());
obj.setName("Perro");
console.log(obj.getName());
console.log(obj.getLen());