let skill ={
     frontEnd:"React",
     backend:"Express",
     database:"MongoDB"
}

const  greet=function(){
    console.log("Welcome to Array")
    return
}
// let output = greet()
// console.log(output);
greet()


let arr = ["sanu",23,45,true,greet,skill,2000000.00]

console.log(arr)

console.log(typeof arr)

console.log(Array.isArray(arr));

// array cane be create by constructor

let arr1 = new Array("sanu", "aarti", "poorti")
console.log(arr1)
console.log(Array.isArray(arr1));

//Is Array mutable in JavaScript?
// Yes, Arrays are mutable in JavaScript because their contents can be modified after creation by adding, removing, or updating elements. 🚀

