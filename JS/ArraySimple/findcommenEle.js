function findCommonEle(arr1, arr2){
  let common =[];
  for(let i =0; i<arr1.length; i++){
    for(let j =0; j<arr2.length; j++){
        if(arr1[i]===arr2[j]){
             common.push(arr1[i])
        }
    }
  }
  console.log(common)
}
findCommonEle([1,3,4,5,6,8], [2,3,5,6,7,8,9])