// shopping cart app
let cart={};
const products=[
    {id:1,name:"Product 1",price:25},
    {id:2,name:"Product 2",price:50},
    {id:3,name:"Product 3",price:75},
];
const showProducts = ()=>{
    let str="";
    products.map((value)=>{
        str+=`Products ID: ${value.id}, Name: ${value.name}, Price: ${value.price}\n`;
    });
    console.log("Products List:");
    console.log(str);
}
showProducts();

// Cart Functions
const addToCart=(id)=>{
    cart={...cart,[id]:1};
};

cart={1:1};
addToCart(1);
addToCart(1);
addToCart(3);

// const showCart=()=>{
//     let str="";
//     products.map(value=>{
//         str+=`${value.name}-${value.price}-${cart[value.id]}-${cart[value.id]*value.price}`;
//     })
//     console.log(cart);
// }
const showCart=()=>{
    let str="";
    products.map(value=>{
        str+=`${value.name}-${value.price}-${cart[value.id]}-${cart[value.id]*value.price}`;
    })
    console.log("My Cart:");
    console.log(cart);
}
showCart();

const increment=(id)=>{
    cart={...cart,[id]: cart[id]+1};
};
increment(1);
showCart();

const decrement=(id)=>{
    cart={...cart,[id]: cart[id]-1};
};
decrement(1);
showCart();

const orderValue=products.reduce((sum,value)=>{
    return sum+(value.price*cart[value.id]??0);
},0);
console.log(`Order Value: ${orderValue}`);