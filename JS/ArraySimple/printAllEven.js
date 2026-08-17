function printAlleven(arr){
let arr1=[];

for(let i =0; i<arr.length; i++){
    if(arr[i]%2===0){
        arr1.push(arr[i])
    }
}
  console.log(arr1);
}
 printAlleven([2,3,4,5,6,7,8,9,21,34,56,67,89,67,34,256]);