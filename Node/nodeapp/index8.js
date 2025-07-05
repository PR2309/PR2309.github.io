import express from 'express';

const app=express();
app.listen(8080,()=>{
    console.log("Server Started as http://localhost:8080");
});

app.get('/products',(req,res)=>{
    res.send("Product List");
});



/*
Virtual Path check for index.html it maps it automatically if found
// takes to "./public/index.html"
// public folder is virtual folder
// if there is no index.html file in virtual folder we have to give the /name_of_file manually after localhost url
// It is used in Express.js to serve static files (like HTML, CSS, JS, images, etc.) from the public directory.
*/
// app.use(express.static("public")); // name can also be other than public
// app.use("/images",express.static("public")); // here we must include images to access public folder content
app.use("/images",express.static("images")); // accessed only at http://localhost:8080/images/name_of_any_file_among_the_files_inside_images_folder
