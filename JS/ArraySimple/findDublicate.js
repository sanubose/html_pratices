function findDublicate(arr){
 for(let i =0; i<arr.length; i++){
    
    for(let j =i+1; j<arr.length; j++){
        if(arr[i]===arr[j]){
        
            console.log("Dublicate :", arr[i]);
        }
     
    }
    // console.log(count);
 }
}
findDublicate([1,2,3,4,3,5,6,4,5,7,8,9,1])