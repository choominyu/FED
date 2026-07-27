// Example Code: 

// console.log(hoistedVar); // Hoisting with var 

// var hoistedVar = "I am hoisted"; 

 

// // Uncomment the line below and observe the error 

// console.log(hoistedLet); 

// let hoistedLet = "I am not hoisted"; 



function calculateArea(width, height) { 

  let area = width * height; 

  console.log(`Width: ${width}, Height: ${height}`); 

  return area; 

} 

console.log(calculateArea(5, "10")); 