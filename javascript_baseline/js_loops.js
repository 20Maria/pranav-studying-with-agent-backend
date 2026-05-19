for (let i = 1; i < 11; i++) {
    console.log("numbers: " + i);
}

let count = 0;
while (count < 11) {
    if (count % 2 === 0 && count !== 0) {
        console.log("even numbers: " + count);
    }
    count++;
}