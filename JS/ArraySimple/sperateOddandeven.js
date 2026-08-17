function sperateOddandEven(arr){
 let even = []
 let odd =[]
 for(let i =0; i<arr.length; i++){
    if(arr[i]%2==0){
        even.push(arr[i])
    }else{
        odd.push(arr[i])
    }
 }
 console.log("Even arr :", even)
 console.log("Odd arr :",odd)
}
sperateOddandEven([12,34,56,78,90,98,76,54,32,11])