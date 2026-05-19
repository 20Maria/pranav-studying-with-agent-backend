
async function fetchUserData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let userData = await response.json();
    console.log("name: " + userData.name, "+ email: " + userData.email);
}

fetchUserData();