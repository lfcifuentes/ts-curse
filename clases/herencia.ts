class Padre {
    protected name:string;

    public constructor(_name:string){
        this.name = _name
    }
}
class Hijo extends Padre {
    public last_name:string

    public constructor(_name:string, _last_name:string) {
        super(_name);
        this.last_name = _last_name
    }
    
    public getName() :string {
        return this.name
    }
}
const luis = new Hijo("Luis","Cifuentes");

console.log(luis.getName());