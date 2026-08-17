function quardnatic(a,b,c){
  let d = b*b-4*a*c;

  if(d<0){
    console.log("roots are imaginary")
  } else if(d===0){
     let x = (-b)/(2*a)
     console.log("roots are equal")
  } else if (d>0){
     let x1 = (-b + Math.sqrt(d))/(2*a)
     let x2 = (-b - Math.sqrt(d))/(2*a)
     console.log("root of X1 =",x1)
     console.log("root of X2 =",x2)
  } 
  

}
quardnatic( 1,5,6);