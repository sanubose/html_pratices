function diff(arr){
 let largest = arr[0];
 let smallest = arr[0];

 for(let i =0; i<arr.length; i++){
    if(arr[i]> largest){
        largest = arr[i]
    }
    if(arr[i]<smallest){
        smallest=arr[i]
    }
 }
   let diff = largest-smallest;
   console.log(diff)
}
diff([12,56,89,31,56,47,55,87])