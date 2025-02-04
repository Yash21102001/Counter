/*
Spreading
merging
destructuring
map and key
filter and reduce
*/

//Spreading
// Spreading ... allow elements or properties to be expanded into individual elements or properties.
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let array3 = [...array1,...array2];

let obj1={
    name:"ashutosh",
    age:23,
}

let obj2;
obj2=obj1;

console.log(obj1)
console.log(obj2)

obj2.name="yash"
//shallow copy 
console.log(obj1)
console.log(obj2)


let obj3={
    name:"yash",
    age:23,
}
let obj4={...obj3}

obj3.name="noname"
console.log(obj3)
console.log(obj4)


let arry=[2,3,4,5,6,7,8]
let newarray=arry.filter((e)=>{
    if(e>5){
        return e;
    }
})
console.log(newarray)