// PROBLEM 1
console.log("all numbers between -1o and 19");
for(var i = -10; i<=19; i++){
    console.log(i);
}

// PROBLEM 2
console.log("print even numbers between 10 and 40");
for(var i = 10; i<=40 ; i++){
    if(i%2=== 0){
        console.log(i);
    }
}

// PROBLEM 3
console.log("print odd numbers between 300 and 333");
for(var i = 300; i<=333 ; i++){
    if(i % 2 >0){
        console.log(i);
    }
}

// PROBLEM 4
console.log("print all numbers divisible by 5 AND 3 between 5 and 50");
for(var i = 5; i<=50 ; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
}
