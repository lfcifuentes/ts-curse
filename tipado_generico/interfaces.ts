interface Person<T> {
    name:T 
}
let obj:Person<string> = {name:"Luis"};
let obj_num:Person<number> = {name:1};

console.log(obj);
console.log(obj_num);