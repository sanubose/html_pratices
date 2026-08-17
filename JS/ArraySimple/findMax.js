function maxFind(arr){
 let max = arr[0];

 for(let i =0; i<arr.length; i++){
    if(max<arr[i]){
        max=arr[i]
    }
    // console.log(max)
 }
 console.log(max)
}
maxFind([12,43,5,67,89,78]);