// ForEach 
const points2=[2,5,3,2,1,8];

points2.forEach(value=>{ // This method executes a provided function once for each array element
    console.log(value);
});

points2.forEach((value,index)=>{ // This method executes a provided function once for each array element
    console.log(`${index} => ${value}`);
});

const points=[2,5,3,2,1,8];
// points.forEach((value,index)=>{
//     // console.log(c[b]);
//     console.log(index+" => "+value);
// });

// // Perform particular operation on each entity separately
// const newArr=points.map((value,index)=>{
//     return (value+=5);
// });
// console.log(newArr);

// const newArr2=points.map((value,index)=>(value+=5));
// console.log(newArr2);

// // Filter desired Values based on condition
// const newArr3=points.filter((value)=>value>2);
// console.log(newArr3);

// // returns the first positon of the desired element
// const result=points.find((value)=>value>2);
// console.log(result);

// const res1=points.reduce((sum,value)=>{
//     return sum+value;
// },0);
// console.log(res1);

const newArr3=points.map((value)=>(value>2)); // always return same number of values
console.log(newArr3);
