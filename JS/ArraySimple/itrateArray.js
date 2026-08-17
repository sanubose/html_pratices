// travrase of array

function arrayTravrasal(arr,n){
  let bag=""
  for(let i =0; i<n; i++){
     bag = bag + arr[i] +" "
  }
  console.log(bag)
}
arrayTravrasal([1,2,3,4,5],5);
//op-1 2 3 4 5