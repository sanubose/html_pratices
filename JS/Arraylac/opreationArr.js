let cart = ["Milk", "Bread", "Egg"]

console.log(cart)

// add 
cart.push("Butter")
console.log(cart)

// add at first

cart.unshift("juice")
console.log(cart)


// index? -> ture -> delete

let index = cart.indexOf("Egg")
    if(index !== -1){
     let deletedItem =   cart.splice(index,2) // here romove 
     console.log(deletedItem)
    }

console.log(cart)