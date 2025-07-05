import jwt from 'jsonwebtoken';

// It’s a common practice in authentication systems (like login sessions or APIs using JWTs).
// JWTs are commonly used in stateless authentication, where the server doesn’t store sessions—just verifies a signed token.

const SECRET = "sometext"; // it is the secret key

// Payload: The information we want to include (but sensitive data like passwords shall be avoided).
// The signature proves that the token is valid and not tampered with.
// If someone changes the payload (e.g. changes role from user to admin), the signature won’t match anymore.
// The server uses the secret to recalculate the signature and compare it to the one in the token.

const user={ // it is the Payload claims
    name:"John",
    email:"john@gmail.com",
    role:"admin"
};
// {
//   "name": "John",
//   ...data
//   "exp": 1725128984, // expiry time (if set)
//   "iat": 1725125384  // issued at time
// }
// This is our actual data (called "claims").

// it actually encodes the user object into a string token
// this sign in a user generating a token for 1h
// Signature = hash_of( Payload.Claims)+Secret
const token=jwt.sign(user,SECRET,{expiresIn:"1h"}); // Signature
console.log(token);
console.log(typeof token);

// this the token into the actuall data
const confrim=jwt.verify(token,SECRET);
console.log(confrim);

// The difference between bcrypt and jwt is: jwt can decrypt but bcrypt can't.