const products = [
  { name: 'Laptop', price: 999,  inStock: true  },
  { name: 'Phone',  price: 699,  inStock: false },
  { name: 'Tablet', price: 499,  inStock: true  },
];

const summaries = products.map(m => `${name} costs ${price} (${inStock ? `in stock` : `out of stock`}`);

console.log(summaries);