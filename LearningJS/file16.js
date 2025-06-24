// Promises
// Used to handle logic and stablize synchronization between those functions dependent on others (.i.e, havin asynchronouse behaviour)
/*
    Problem	and How Promises Help
        Callback Hell       	    -   Avoid deeply nested callbacks
        Error Handling              -	Centralized error handling with .catch()
        Sequencing Tasks            -	Chain .then() to run async steps in order
        Parallel Async Operations   -	Use Promise.all() or Promise.race()
*/

/*
    Promise States
        Pending – not yet resolved or rejected.
        Resolved (Fulfilled) – completed successfully.
        Rejected – failed with an error.
*/

// Working fine
const fa1 = () =>{
    return 5;
};
const fa2=(x)=>{
    return console.log(x+6);
};
const n1=fa1();
fa2(n1);

// Problem: Delay of any fucntion execution may reuslt in error thrown by the dependent ones.
// // Returns error as f1 will execute after 1 second  but f2 is not waiting and getting a NaN value.
// const f1 = () =>{
//     // return 5;
//     // // delaying
//     setTimeout(()=>{
//         return 5;
//     },1000); // 1 second
// };
// const f2=(x)=>{ //f2 won't wait for f1 to execute after 1 second
//     return console.log(x+6);
// };
// const n=f1();
// f2(n);

// Solution: Promises
const fb1 = () =>{
    return new Promise ((resolve,reject)=>{
        // resolve(5); // if f1 executed successfully
        reject("Something went wrong"); // if f1 failed to execute
    });
}
const fb2=(x)=>{
    return console.log(x+6);
};
fb1()
    .then((n)=>fb2(n))
    .catch((err)=>console.log(err));

// Conditonal Modification to reject of if argument in f1 is -ve otherwidse resolve
const fc1 = (a) =>{
    return new Promise ((resolve,reject)=>{
        if(a<0) reject("Something went wrong"); 
        else resolve(x);
    });
}
const fc2=(x)=>{
    return console.log(x+6);
};
fc1(-3)
    .then((n)=>fc2(n))
    .catch((err)=>console.log(err));


// Fetch Method
// fetch functions always returns a Promise
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json()) // returns data in JSON format
.then(data=>{
    data.forEach((value) => {
        console.log(`Name: ${value.name}, Email: ${value.email}\n`);
    });
})
.catch((err)=>{console.error(err)});

// Async-Await
// Modern Alternative of Promises: async/await
// Syntactic sugar over Promises:
// Has easier syntax
// Is easy to debug

async function getData() {
    try {
        const res = await fetch("http://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error("Error:", err);
    }
}

const fetchData= async ()=>{ //stablize async function
    const res = await fetch("http://jsonplaceholder.typicode.com/users"); // waits to execute next line until this line executes (async function here)
    const data = await res.json(); // waits to execute next line until this line executes (previous await here)
    data.forEach((value)=>{
        console.log(`Name: ${value.name}, Email: ${value.email}`);
    });
};
