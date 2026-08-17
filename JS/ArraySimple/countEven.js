function countEven(arr){
    let arr1=[]
  let count=0;
  for(let i =0; i<arr.length; i++){
    if(arr[i]%2==0){
       arr1.push(arr[i]);
       count +=1
    }
  }
  console.log("array of Even : ",arr1 )
  console.log("Num of even:",count);
}

countEven([12,34,65,78,98,76,54,32,121,344,56,67,87]);