const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// console log name
names.forEach((name) => console.log(name));

// console log name and province
names.forEach((name) => {
  console.log(`${name} (${provinces[names.indexOf(name)]})`);
});

// map and uppercase
const upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

// map and length
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// alphabetically sorted provinces
const sortedProvinces = provinces.toSorted();
console.log(sortedProvinces);

//Use filter to remove all provinces that have the word Cape in them.
//After filtering the array, return the amount of provinces left.
//The final value should be 3

const filteredArray = provinces.filter((province) => province.includes("Cape"));
console.log(`${filteredArray} ${filteredArray.length}`);

// Map and boolean, true if name includes "S"
const booleanArray = names.map(
  (name) => name.includes("S") || name.includes("s")
);

// Create and object with a layout -> name:province using reduce

const nameProvinceObj = names.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = provinces[names.indexOf(currentValue)];
  return accumulator;
}, {});

// Additional challenge:

// console.log(
//     const products = [
//         { product: 'banana', price: "2" },
//         { product: 'mango', price: 6 },
//         { product: 'potato', price: ' ' },
//         { product: 'avocado', price: "8" },
//         { product: 'coffee', price: 10 },
//         { product: 'tea', price: '' },
//       ]

//       // console log each product name
//       products.forEach((product) => console.log(product.product));

//       // filtered based on the length of the product names
//       const filteredArray = products.filter((product) => product.product.length > 5)
//       console.log(filteredArray)

//       // Using filter and map to change string prices to int and remove prods with no price
//       const stringPriceArray = products.filter(( product) => typeof product.price === 'string' && product.price.trim() !== "")
//       const stringToIntArray = stringPriceArray.map((product) => parseInt(product.price))

//       // Using reducer to get the total sum of stringToIntArray
//       const sum = stringToIntArray.reduce((accumulator, currentValue) => accumulator += currentValue)
//       console.log(sum)

//       // Using reduce to concat product names into a single string
//       const productNamesString = products.reduce((accumulator, currentValue) => accumulator += `${currentValue.product}, `, "")
//       console.log(productNamesString)

//       // filtering array to remove incorrect price values
//       const intArray = products.filter((product) => product.price.toString().trim() !== "")
//       // Using reducer to determine product with highest price
//       let mostExpensive = intArray.reduce((accumulator, currentValue) => {
//         const accumulatorPrice = parseInt(accumulator.price) || 0
//         const currentValuePrice = parseInt(currentValue.price) || 0
//         return accumulatorPrice > currentValuePrice? accumulator : currentValue
//       })

//       // Least expensive using reducer
//       let leastExpensive = intArray.reduce((accumulator, currentValue) => {
//         const accumulatorPrice = parseInt(accumulator.price) || 0
//         const currentValuePrice = parseInt(currentValue.price) || 0
//         return accumulatorPrice < currentValuePrice? accumulator : currentValue
//       })
//       console.log(`Highest: ${mostExpensive.product}. Lowest: ${leastExpensive.product}`)

//       // Recreating object array with new "name" keys and "cost" keys
//       const newProductsArray = products.reduce((accumulator, currentValue) => {
//         return [...accumulator, {name: currentValue.product, cost: currentValue.price}]
//       }, [])

//       console.log(newProductsArray)
// )
