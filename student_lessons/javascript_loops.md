# Lesson 4: Loops (for and while)

Loops allow you to run the same code multiple times, which is essential for working with lists or repeating tasks.

## The `for` Loop
A `for` loop is great when you know how many times you want to repeat something.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}
```

## The `while` Loop
A `while` loop is used when you want to repeat code as long as a condition is true.

```javascript
let count = 0;
while (count < 5) {
  console.log("Count is: " + count);
  count++;
}
```

## Fourth Task
Create a file named `js_loops.js` in `javascript_baseline/` that:
1. Uses a `for` loop to print the numbers from 1 to 10.
2. Uses a `while` loop to print the even numbers from 2 to 10.
