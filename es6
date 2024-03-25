// Destructuring and default parameters
function userProfile({name, age, country = 'Unknown'}) {
 console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}
// Arrow function and template literal
const greet = (name) => console.log(`Hello, ${name}!`);
// Usage of async/await
async function fetchData(url) {
 try {
 const response = await fetch(url);
 const data = await response.json();
 console.log(data);
 } catch (error) {
 console.error('Error fetching data:', error);
 }
}
// Example usage
userProfile({name: 'Jane Doe', age: 30});
greet('John');
fetchData('https://api.example.com/data');
