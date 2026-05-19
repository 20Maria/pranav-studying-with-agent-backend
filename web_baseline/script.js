// let outputDiv = document.getElementById("output");
// outputDiv.innerHTML = ", das Skript läuft im Browser!";


function initPage() {
    const newTitle = document.createElement("h2");
    newTitle.innerText = "Hallo Masha"

    const newText = document.createElement("span");
    newText.innerText = (", das Skript läuft im Browser!")

    let targetArea = document.getElementById("output");

    targetArea.appendChild(newTitle);
    targetArea.appendChild(newText);
}

// add user and show name + email
function appendUser(user) {
    let targetArea = document.getElementById("output");
    const userDiv = document.createElement("div");
    userDiv.innerText = user.name + " (" + user.email + ")";
    targetArea.appendChild(userDiv);
}

// get users and go throw all users in the list
async function displayUsers() {
    initPage();
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();

        users.forEach(user => {
            appendUser(user);
        })
    } catch (error) {
        console.log("Error: " + error.message);
    }
}


displayUsers();