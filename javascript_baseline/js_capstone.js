function printReports(filteredUsers) {
    return filteredUsers.forEach(user => {
        console.log("name: " + user.name)
        console.log("company: " + user.company.name)
    })
}

async function registerDummyUser() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST', // create new smth
            //    JSON.stringify(...) convert a JScript object into a single long line of text
            body: JSON.stringify({ // server expects params: title, body, userId
                title: 'Das ist mein Titel',
                body: 'Das ist my post in body',
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json' // tells server "hey, content here is JSON format"
                // Content-Type: data format
                // appl/json: JSON format
            }

        });
        console.log("status code: " + response.status)
    } catch (error) {
        console.log("error2: " + error.message)
    }
}

function filterUsers(users) {
    let filter = users.filter(user => {
        return user.username.length === 6; // return users only with 6 or more characters
    });
    console.log("filter: " + JSON.stringify(filter));
    return filter;
    // if you don't need print -> remove "console.log" & "return filter"
}

async function getUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users'); // loading user data
        let users = await response.json(); // wait until response.json() is finished

        let filteredUsers = filterUsers(users);

        printReports(filteredUsers);

        await registerDummyUser();


    } catch (error) {
        console.log("error1: " + error.status);
    }
}

getUsers();