interface General {
    (name:string, last_name:string):void
}

let fun:General = (name:string, last_name:string):void => {
    console.log(`${name} ${last_name}`);
}

fun("luis","Cifuentes");