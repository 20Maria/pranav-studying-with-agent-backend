
const fs = require('fs/promises');

async function readFile(){
    try {
        const data = await fs.readFile('users.json', 'utf8'); // save data in a new variable
        const totalUsers = JSON.parse(data); // translate JSON back to object
        const firstUser = totalUsers[0]; // find first user
        const userName = firstUser.name;

        console.log("total users:", totalUsers.length); // print saved data to see result
        console.log("first user: ", userName);

    } catch (error) {
        console.log("error: ", error.message);
    }

}

readFile();