//make a multiplie whole arr with 2 *[1,2,3,4,5]====>[2,4,6,8,10]

function multiplieArr(arr,a){

    let arr1=[];
    for(let i =0; i<arr.length; i++){
      arr1.push(arr[i]*a)
    }
    console.log(arr1)

}
multiplieArr([1,2,3,4,5],2);  