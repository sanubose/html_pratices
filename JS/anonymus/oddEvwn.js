// const OddEven=function(arr){

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2===0){
//             console.log("even")
//            // return OddEven
//         }else{
//             console.log("odd")
//               //return OddEven
//         }
//     }
//     return OddEven;
// }

// let output = OddEven([1,2,3,4,5,6])
// console.log(output)

const OddEven = function(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            result.push("Even");
        }else{
            result.push("Odd");
        }
    }

    return result;
}

let output = OddEven([1,2,3,4,5,6]);
console.log(output);