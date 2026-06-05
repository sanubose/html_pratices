let ratings = [4.5,3,2,5.0,2.8,4.7]

// check i f a moving have 5 rating


console.log(" has 5.0 : ", ratings.includes(5.0))

// find index of first rating which 


let lowIndex =ratings.findIndex((r)=>r<3)
console.log(lowIndex)

// word transformation

let words = [ "hello", "Ji", "Good" , " morning"]

let capital =words.map((w)=>w.toUpperCase())
console.log(capital)
