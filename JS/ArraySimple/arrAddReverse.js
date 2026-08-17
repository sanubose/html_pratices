function add(arr1,arr2){
    let ARR =[]

    for(let i=0; i<arr1.length; i++){
       ARR.push( arr1[i]+arr2[arr1.length-1-i])
    }
    console.log(ARR)
}
add([1,2,3,4,5],[1,2,3,4,5]);