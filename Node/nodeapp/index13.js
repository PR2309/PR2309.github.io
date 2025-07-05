// dotenv
// normally  sesitive inforamtion or the information that can be changed and we want o to keep it secret we keep it all into .env
// it changes the value globally so wwe don't need to do it manually on every where
// while storing sesitive information we put it in .gitignore  before uploading it to github to protect personal data like password, api key etc

import dotenv from'dotenv';
dotenv.config();
const dbuser=process.env.DBUSER;
const dbpass=process.env.DBPASS;

// encodeURIComponent(...) encodes that value into a safe URL-compatible format
// Because environment variables may contain special characters (like spaces, &, =, /, etc.) which can break a URL if directly inserted.
// encodeURIComponent makes the string safe to include in:
//      Query strings: ?name=John Doe → ?name=John%20Doe
// using demo in a URL:
//      const url = `https://example.com/search?query=${demo}`;
const demo=encodeURIComponent(process.env.DEMO);
const demo2=encodeURIComponent(process.env.DEMO2); // DEMO=John Doe & Friends;
console.log(demo2); // Output: John%20Doe%20%26%20Friends


console.log(`DBUSER: ${dbuser}, DBPASS: ${dbpass}`);

// .gitignore encripts the .env data to save it so that it's not accessible publically but accessible for deployment by th eowner.
