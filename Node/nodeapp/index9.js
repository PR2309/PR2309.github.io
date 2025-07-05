import bcrypt from 'bcrypt';
// bcrypt is used for hashing the password
// we shall encrypt the passwords before saving it to database.
// It returns a Promise
// bcrypt works One-way (you can't decrypt it).

// Hashing Password
const pwd="pass1234";
// const hashedPwd1=await bcrypt.hash(pwd,10); // it is asynchronous
const hashedPwd=bcrypt.hashSync(pwd,10); // it is synchronous, needs to be imported separately
// await is to resolve Promise.
// 10 is The salt rounds
// Salt Rounds: how many times to process the data
//              higher values mean more security but slower hashing.
//              10-12 value is recommended
console.log(hashedPwd);

// Compairing Password as we can't decrypt it anymore we use this method
// const check= await bcrypt.compare(pwd,hashedPwd); // This is asynchronous
const check1= bcrypt.compareSync(pwd, hashedPwd); // This is synchronous, needs to be imported separately
console.log(check1);

// Purpose: Extracts the number of salt rounds used in a hash.
const rounds = bcrypt.getRounds(hashedPwd);
console.log(rounds);

// Generate a random salt, but make it computationally expensive enough to perform 2¹⁰ (1024) hashing rounds internally.
// It tells bcrypt to generate a new random salt using 10 rounds of processing
// It randomizes the hard coded value of salt rounds.
const salt = await bcrypt.genSalt(10); // it is asynchronous
const salt2 = bcrypt.genSaltSync(100); // it is synchronous, needs to be imported separately
console.log(bcrypt.getRounds(salt));
console.log(bcrypt.getRounds(salt2));