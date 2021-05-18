const first = (name:string, last_name:string, old:number = 10) :void => {
    let message:string;
    if(old){
        message = `Hi ${name} ${last_name}, your old is ${old}`
    }else{
        message = `Hi ${name} ${last_name}`
    }
    console.log(message);
}
first('Luis','Cifuentes', 23);
first('Yuli','Cantillo');