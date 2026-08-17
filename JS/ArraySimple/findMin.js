function findMin(arr){

    let min=arr[0];
    for(let i=0; i<arr.length; i++){
        if(min>arr[i]){
            min = arr[i]
        }
    }
    console.log(min)
}
findMin([34,56,78,21,45,67,12,3,4,5,1]);