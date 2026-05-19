function calculateArea(width, height) {
    return width * height;
}

function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

console.log("Area: " + calculateArea(300, 350));
console.log("isAdult: " + isAdult(25));