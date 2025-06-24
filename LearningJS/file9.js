// Arrays
const score= [10,20,30,40,50]; // This is an array of scores

console.log(score); // This will log the entire array

console.log(score[0]); // This will log the first element of the array, which is 10
console.log(score[1]); // This will log the second element of the array, which is 20

score[3]=41; // Value at index 3 is updated from 40 to 41
console.log(score);

score.push(60); // This will add 60 to the end of the array
console.log(score); // This will log the updated array, which is now [10, 20, 30, 40, 50, 60]

score.pop(); // This will remove the last element of the array, which is 60
console.log(score); // This will log the updated array, which is now [10, 20, 30, 40, 50]

score.unshift(5); // This will add 5 to the beginning of the array
console.log(score); // This will log the updated array, which is now [5, 10, 20, 30, 40, 50]

score.shift(); // This will remove the first element of the array, which is 5
console.log(score); // This will log the updated array, which is now [10, 20, 30, 40, 50]

console.log(score.length); // This will log the length of the array, which is 5

score.push(30);
console.log(score.indexOf(30)); // This will log the index of the element 30
console.log(score.lastIndexOf(30)); // This will log the last index of the element 30

console.log(score.includes(20)); // This will log true if 20 is present in the array, otherwise false

// Iteration
for(let i=0;i<score.length;i++){
    console.log(score[i]);
}