function add(x,y){return x+y;}
function substract(x,y){return x-y;}

// export {add,substract}; // normal export

// default don't need brackets
// default can be written only once
export default add; //default returns only one thing
export {substract};
// export default {add,substract}; //default returns only one thing we need brace for multiple things