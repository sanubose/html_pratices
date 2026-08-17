function findThirdLeast(arr){
let first=Infinity;
let Second=Infinity;
let Third=Infinity;
for(let i =0;  i<arr.length; i++){
   if(arr[i]<first){
      Third=Second;
      Second=first;
      first=arr[i];
   }else if(arr[i]<Second && arr[i]!==first){
              Third=Second;
              Second=arr[i];
   }else if(arr[i]<Third && arr[i]!==Second && arr[i]!==first){
             Third=arr[i];
   }

}
     console.log("Firstleast :" ,first);
      console.log("Secondleast :" , Second);
       console.log("Thirdleast :" , Third);
}
findThirdLeast([12,34,5,10,25,9]);