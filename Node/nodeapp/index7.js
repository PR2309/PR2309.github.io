import express from 'express';

const app=express();
app.listen(8080,(err)=>{
    if(err) {console.log(`Error while starting the server at http://localhost:8080`);}
    else{console.log(`Server is running at http://localhost:8080`);}
});

app.use(express.json());

let products=[];
let product_list={};

// POST METHOD

// app.post("/products",(req,res)=>{
//     // console.log(req.body);
//     products.push(req.body);
//     res.send("Product Created");
// });

// app.post("/products",(req,res)=>{
//     // console.log(req.body);
//     const {id,name,price}=req.body; // destructuring
//     products.push({id,name,price});
//     res.send("Product Created");
// });

// app.post("/products",(req,res)=>{
//    // console.log(req.body);
//     const {id,name,price}=req.body; // destructuring

//     // avoid duplicat entries
//     const found=products.find((product)=>product.id===id);
//     if(found){res.send("product Already Exists");}
//     else{
//         products.push({id,name,price});
//         res.send("Product Created");
//     }
//     res.status(201).json({message:"Product Added"});
// });
app.post("/products",(req,res)=>{
    try{

        console.log(req.body);
        const {id,name,price}=req.body; // destructuring
        
        // avoid duplicate entries
        const found=products.find((product)=>product.id===id);
        if(found){res.send("product Already Exists");}
        else{
            products.push({id,name,price});
            res.send("Product Created");
        }
        res.status(201).json({message:"Product Added"});
    } catch(err){
        res.status(400).json({message:"Something went wrong"});
    }
});



app.post("/productList",(req,res)=>{
    console.log(req.body);
    const {id,name,price}=req.body; // destructuring
    product_list.id=id;
    product_list.name=name;
    product_list.price=price;
    res.send("Product Created");
});
    

//  # GET METHOD
app.get("/products",(req,res)=>{
    res.send(products);
});
app.get("/productList",(req,res)=>{
    res.json(product_list);
});



// # PUT (FULL UPDATE) METHOD
// Updates a file completely
// patch updates a file partially
app.put("/products/:id",(req,res)=>{
    // console.log(req.body);
    const {id,name,price}=req.body;
    const present=products.findIndex((product)=>product.id===id);
    if(present===-1){res.status(404).json({message:"Product Not Found"});}
    else{
        products[present]={id,name,price};
        res.status(200).json({message:"Product Update",product:products[present]});
    }    
});

// # DELETE METHDO
app.delete("/products/:id",(req,res)=>{ // deletes particularly matching entities 
    try{
        const id=Number(req.params.id);
        const initialLength=products.length;
        products=products.filter((prod)=>prod.id!==id);
        if(products.length === initialLength){return res.status(404).json({ message: "Product not found" });}
        res.json("Product Deleted.");
    }catch(err){
        res.status(400).json({message:"Something went wrong"});
    }
});

// # PATCH (PARTIAL UPDATE) METHDO
// Updates a file partially
// put updates a file completely
app.patch("/products/:id",(req,res)=>{
    try{
        const id=Number(req.params.id);
        let prod=products.find((prod)=>prod.id===id);
        if (!prod) {return res.status(404).json({ message: "Product not found" });}
        const{name,price}=req.body;
        if(prod.name!==undefined){prod.name=name;}
        if(prod.price!=undefined){prod.price=price;}
        res.status(200).send("Products updated");
    }catch(err){
        res.status(400).json({
            message:"Something went wrong",
            error: err
        });
    }
});

// ALL METHOD
// app.all(path, handler) in Express.js is used to define a route handler that responds to all HTTP methods (like GET, POST, PUT, PATCH, DELETE, etc.) for a given path.
// Commonly used to:
//     - Handle unsupported methods and return 405 Method Not Allowed.
//     - Add middleware/logic that applies regardless of method.
//     - Provide catch-all fallbacks for a specific route.
app.all('/demo', (req, res) => {
    // Methods Allowed here:
    //     - GET /demo → Responds ✅
    //     - POST /demo → Responds ✅
    //     - PUT /demo → Responds ✅
    //     - PATCH /demo → Responds ✅
    //     - DELETE /demo → Responds ✅
    //     - OPTIONS /demo → Responds ✅
    res.send(`This handles any HTTP method at /demo. You used: ${req.method}`);
});

app.all('/api/demo', (req, res, next) => {
    const allowedMethods = ['GET', 'POST']; // Methods to be allowed
    if (!allowedMethods.includes(req.method)) {
        res.set('Allow', allowedMethods.join(', '));
        return res.status(405).send('Method Not Allowed');
    }
    next(); // continue to actual handler if allowed
});


/***********************************************************************************/
// TRACE METHOD
// In Express.js, the TRACE method is not enabled by default because it's rarely used in standard web development and is often considered a security risk.
// This middleware checks if the request method is TRACE, and if so, responds accordingly.
// Why TRACE Is Risky:
//     - It echoes back the full HTTP request (headers + body).
//     - Attackers can use it for Cross-Site Tracing (XST) attacks to steal cookies.
//     - Browsers usually block TRACE by default
// Don’t use or allow TRACE unless:
//     - You are building a proxy server.
//     - You're working in a controlled internal environment.
//     - You explicitly need it for low-level debugging.
app.use((req, res, next) => {
    if (req.method === 'TRACE') {
        res.status(200).send(`TRACE ${req.originalUrl} received`);
    } else {
        next();
    }
});

/*****************************************************************************/
