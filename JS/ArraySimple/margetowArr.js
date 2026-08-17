function marge(arr1,arr2){
//let  Arr3=[]
 for(let i =0; i<arr2.length; i++){
    arr1.push(arr2[i])
 }
 console.log(arr1)
}
marge([1,2,3,4],[5,6,7,8]);