function secondLeastNum(arr){
  let first =Infinity;
  let second = Infinity;

  for(let i =0; i<arr.length; i++){
    if(arr[i]<first){
      second = first;
      first= arr[i]
    } else if( arr[i]<second && arr[i]!==first){
      second= arr[i]
    }
  }
  console.log(first)
  console.log(second)
}
secondLeastNum([12, 45, 67, 89, 34]);