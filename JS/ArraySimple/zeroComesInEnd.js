function ZeroComesEnd(arr){
 
    let index =0;
    for(let i =0; i<arr.length; i++){
        if(arr[i]!==0){
            arr[index]=arr[i]
            index++
        }
    }
     while(index<arr.length){
        arr[index]= 0;
          index++
     }
     console.log(arr)
}
ZeroComesEnd([1,0,3,5,0,0,8,9,6,0,7,4])