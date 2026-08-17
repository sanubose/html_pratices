function countFrequncy(arr,find){
let count =0;
for(let i =0; i<arr.length; i++){
    if(arr[i]===find){
        count++
    }
}
console.log(count)
}
countFrequncy([1,2,3,4,56,7,8,99,8,771,12,33,44,55,1,1,12,],1)