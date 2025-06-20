// Operators
let a1="10";
let a2=10;
console.log(a1+a2) // String concatenation
console.log(a1*a2) // automatically understands it's mathematical oprational logic and treats it as number
console.log(a1-a2) // String to number conversion
console.log(a1==a2) // Loose equality check (value only, not type)
console.log(a1===a2) // Strict equality check (type and value)
console.log(a1!=a2) // Loose inequality check
console.log(a1!==a2) // Strict inequality check

// Comparison Operators
console.log(a1<a2) // Less than
console.log(a1>a2) // Greater than
console.log(a1<=a2) // Less than or equal to
console.log(a1>=a2) // Greater than or equal to

// Logical Operators
let a=10,b=2,c=10;
console.log(a>b || a>c) // Logical OR
console.log(a>b && a>c) // Logical AND
console.log(!(a>b)) // Logical NOT
console.log(!a>b) // Logical NOT

// Arithmetic Operators
console.log(a+b) // Addition
console.log(a-b) // Subtraction
console.log(a*b) // Multiplication
console.log(a/b) // Division
console.log(a%b) // Modulus (Remainder)
console.log(a**b) // Exponentiation (Power)

// Unary Operators
let x=5;
console.log(++x) // Pre-increment (increments x and returns the new value)
console.log(x++) // Post-increment (increments x and returns the new value)
console.log(--x) // Pre-decrement (decrements x and returns the new value)
console.log(x--) // Post-decrement (decrements x and returns the new value)


// Bitwise Operators
let b1=5; // 0101
let b2=3; // 0011
console.log(b1&b2) // Bitwise AND (0001)
console.log(b1|b2) // Bitwise OR (0111)
console.log(b1^b2) // Bitwise XOR (0110)
console.log(~b1) // Bitwise NOT (invert bits)
console.log(b1<<1) // Left shift (1010)
console.log(b1>>1) // Right shift (0010)

// Assignment Operators
let num=10;
num+=5; // num = num + 5
num-=3; // num = num - 3
num*=2; // num = num * 2
num/=4; // num = num / 4
num%=3; // num = num % 3
num**=2; // num = num ** 2 (Exponentiation)