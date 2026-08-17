// sum of all array ---->[10,20,30,40,50,60,70,80,90,100]==>550

function sumArr(arr){
let sum=0;
for(let i =0; i<arr.length; i++){
    sum = sum +arr[i]
}
console.log(sum)
}
 sumArr([10,20,30,40,50,60,70,80,90,100]);