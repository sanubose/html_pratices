function countOdds(arr){
 let arr1=[];
 let count=0;
 for(let i =0; i<arr.length; i++){
    if(arr[i]%2!==0){
        arr1.push(arr[i]);
        count+=1
    }
 }
 console.log("Odd Array :",arr1);
  console.log("Odd count :",count)
}
countOdds([23,24,56,45,78,89,98,45,12,17,44,12,11,20,2611,2011,67,89,67,1])