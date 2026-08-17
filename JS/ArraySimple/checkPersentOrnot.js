function check(arr, find){
 for(let i =0; i<arr.length; i++){
     if (arr[i]==find){
        console.log("YES")
         return;
     }
   }
        console.log("no")
   
 
}
check([12,34,56,78,90,9,87,65,43,21], 90);