
//Exercise 1 — Product Operations
const products = [
  { id: 1, name: "Laptop", price: 700 },
  { id: 2, name: "Phone", price: 300 },
  { id: 3, name: "Tablet", price: 500 },
  { id: 4, name: "Keyboard", price: 100 }
];

//Getting only product names
const productName = products.map(product => product.name).join(", ")
console.log(productName);

//Getting products above 400
const productPrice = products.filter(product => product.price > 400).map(product => product.name).join(', ');
console.log(productPrice);

//Calculate total price
const totalPrice = products.reduce((total, product) => product.price + total, 0);
console.log(totalPrice);

//Find the product named "Phone"
const findProductByName = products.find(product => product.name === "Phone")
console.log(findProductByName);


//Add a new product using the spread operator
const newProduct = {id: 5, name: "Speaker", price: 400};
const allProducts = [...products, newProduct];
console.log(allProducts);

//Sort products by price ascending
const ascendPrice = [...products].sort((a, b) =>{
    return a.price - b.price

});
console.log(ascendPrice);

//Create a sentence for each product
const productSentence = products.map(product => {
    return`${product.name} costs ${product.price}`
}).join(",");

console.log(productSentence);

//Exercise 2 — DOM Practice
