let num = 1;

if(num<2){
    console.log("this is not prime");
}else{
    let isPrime = true;

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            isPrime = false;
        }
    }

    if(isPrime){
        console.log("this is prime");
    }else{
        console.log("this is not prime");
    }
}