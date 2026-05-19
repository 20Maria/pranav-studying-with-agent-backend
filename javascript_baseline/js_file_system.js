// Node.js darf auf Dateien zugreifen, aber diese Funktionen sind nicht einfach so da – man muss sie "einladen"

const fs = require('fs/promises'); // 'promises' = moderne asynchrone Funktionen mit await

async function saveFile() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json(); //saving data in users
        let userText = JSON.stringify(users, null, 2); //translate raw users-data to text

        await fs.writeFile('users.json', userText); //create file with translated users as a text

    } catch (error) {
        console.log("Error: " + error.message);
    }
}


saveFile();