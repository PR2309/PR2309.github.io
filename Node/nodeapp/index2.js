import fs from 'fs'; // File System Module

// // rewrites the file named myFile.txt or creates it if not exists already.
// fs.writeFile("myFile.txt","Hello World!",(err)=>{ // It is asynchronous function
//     if(err)throw err;
// });
// // same as writeFile()
// fs.writeFileSync("myFile.txt","Hello World!",(err)=>{ // it is synchronous funciton
//     if(err)throw err;
// });

// // appends the file named myFile.txt or creates it if not exists already.
// fs.appendFile("myFile1.txt","Hello World!",(err)=>{ // It is asynchronous function
//     if(err)throw err;
// });
// // same as appendFile()
// fs.appendFileSync("myFile1.txt","Hello World!",(err)=>{ // It is synchronous function
//     if(err)throw err;
// });

// // reads the content present inside the file and returns data or error(if occured) using utf-8 charset
// fs.readFile("about.txt","utf-8",(err,data)=>{ // It is asynchronous function
//     if(err)throw err;
//     console.log(data);
// });
// // same as readFile()
// fs.readFileSync("about.txt","utf-8",(err,data)=>{ // It is synchronous function
//     if(err)throw err;
//     console.log(data);
// });

// // renames a file from old name to new name
// fs.rename("myFile1.txt","newFile.txt",(err)=>{ // It is asynchronous function
//     if(err)throw err;
// });
// // same as rename()
// fs.renameSync("myFile1.txt","newFile.txt",(err)=>{ // It is synchronous function
//     if(err)throw err;
// });

// // delets the file
// fs.unlink("newFile.txt",(err)=>{ // It is asynchronous function
//     if(err)throw err;
// });
// // same as unlink()
// fs.unlinkSync("newFile.txt",(err)=>{ // It is synchronous function
//     if(err)throw err;
// });