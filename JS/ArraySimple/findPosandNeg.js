//Count Positive and Negative Numbers
function findPositiveAndNegative(arr){
  let Positive = 0;
  let Parr=[]
  let Negative =0;
  let Narr=[]

  for(let i =0; i<arr.length; i++){
    if(arr[i]>0){
        Parr.push(arr[i])
        Positive++
    }else{
        Narr.push(arr[i])
        Negative++
    }
  }
  console.log(Parr,Positive);
  console.log(Narr,Negative);
}
findPositiveAndNegative([1,-2,3,-7,8,-9,10])