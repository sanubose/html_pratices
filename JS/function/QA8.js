
const calculate = (a,b ,operation)=>{
   return operation(a,b)
}

console.log(calculate(2,3,function(n1,n2){
  return n1+n2
}))

console.log(calculate(2,3,function(n1,n2){
  return n1-n2
}))

console.log(calculate(2,3,function(n1,n2){
  return n1*n2
}))

console.log(calculate(2,3,function(n1,n2){
  return n1**n2
}))

console.log(calculate(2,3,function(n1,n2){
  return n1/n2
}))