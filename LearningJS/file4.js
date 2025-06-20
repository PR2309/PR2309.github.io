// Loops
// Loops are used to execute a block of code repeatedly until a specified condition is met.
// There are several types of loops in JavaScript, including for, while, and do-while loops.

// While Loop
// The while loop continues to execute as long as the condition is true.
// It checks the condition before executing the code block.
let i1=1;
while(i1<=5){
    if(i===3){
        continue; // This will skip the current iteration when i1 is 3
    }
    console.log(i1);
    i1++;
}

// For Loop
// The for loop is a more concise way to write a loop that has a known number of iterations.
// It consists of three parts: initialization, condition, and increment/decrement.
for(let i2=1;i2<=5;i2++){
    console.log(i2);
    if(i2===3) {
        console.log("Breaking the loop at i2 = 3");
        break; // This will exit the loop when i2 is 3
    }
}

// Do-While Loop
let i3=1;
do{
    console.log(i3);
    i3++;
}while(i3<=0); // // This will work same as while loop but will execute at least once even if the condition is false,
