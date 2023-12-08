
                                        MCQ TEST




1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer : B: ReferenceError
In the provided code, there is a typographical error. Instead of initializing the variable "greeting," the code initializes "greetign" (with a typo). 




2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer : D: 3
the number 1 and the string "2" will be type-coerced to numbers, and then the addition will take place. So, 1 + 2 equals 3.




3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer : A: ['🍕', '🍫', '🥑', '🍔']
it remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔'].

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer:B: Hi there, 
The sayHi function expects an argument name, but it's called without any argument. In JavaScript, when a parameter is not provided, it defaults to undefined.





5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer : C: 3

The forEach loop iterates through the nums array and increments the count variable for each truthy value in the array. In this case, there are three truthy values (1, 2, and 3), so count becomes 3.