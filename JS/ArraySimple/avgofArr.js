function avgOfarr(arr){
 let sum =0;
 let avg = 0;
 for(let i =0; i<arr.length; i++){
     sum = sum+arr[i]
 }
   avg = sum/arr.length;
   console.log(avg)
}
avgOfarr([12,30,24,67,98,89])