let marks = [45,67,89,32,76,99,54]

// marks greater than 60
//67 89 76 99
let above60=marks.filter( (item)=>item>60)
console.log(above60)


// find occurence

let topper=marks.find((m)=>90)
console.log(topper)

// reduce
let totalMark = marks.reduce((sum,m)=>{
    sum = sum +m
    return sum
},0)

let avg = (totalMark)/(marks.length)
console.log(avg)


console.log(marks.sort())
console.log(arr.sort((a, b) => a - b)) // Ascending
console.log(arr.sort((a, b) => b - a)) // Descending