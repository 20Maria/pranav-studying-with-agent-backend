# Lesson 3: Control Flow (if/else)

Sometimes you need your code to make decisions. That's where `if` and `else` come in.

## How it Works
The code inside the `if` block only runs if the condition is `true`. If it's `false`, it moves to the `else` block (if provided).

Example:
```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

## Comparison Operators
To create conditions, we use:
- `>` (greater than), `<` (less than)
- `>=` (greater than or equal to), `<=` (less than or equal to)
- `===` (equal to), `!==` (not equal to)

## Third Task
Create a file named `js_control_flow.js` in `javascript_baseline/` that:
1. Declares a variable `temperature`.
2. Uses an `if/else` statement to print:
   - "It's hot outside!" if the temperature is 30 or higher.
   - "It's a pleasant day." if it is between 15 and 29.
   - "It's cold!" if it is below 15.
   *(Hint: You can use `else if` to check multiple conditions!)*
