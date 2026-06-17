let sumA =function(a,b){
  let add = a+b
  return add
}
let ans1 = sumA(2,4)
console.log(ans1)


let jod =(x,y)=>{
  let add = x+y
  return add;
}
let res1 = jod(7,4)
console.log(res1)


function squareAdd(i,j){
  
  
  let a = sq(i)
  let b = sq(j)
  
   function sq(num){
     return num*num
   }
   return a+b
}

let res = squareAdd(2,5)
console.log(res)

function one() {

    function two() {

        function three() {

            function four() {
                console.log("Hello");
            }

            four();
        }

        three();
    }

    two();
}

one();
