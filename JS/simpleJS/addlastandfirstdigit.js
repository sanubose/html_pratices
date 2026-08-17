function addlastandfirstdigit(num){
    let lastdigit = num%10;
    let firstdigit = parseInt(num/1000)
    let sum = lastdigit+firstdigit
    console.log(sum)
}
addlastandfirstdigit(1234);