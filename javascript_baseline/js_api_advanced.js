async function createPost() {
    try { //Every line inside “try{...}” is monitored for errors. try is like a safety belt for code
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Das ist mein Titel',
                body: 'Das ist my post in body',
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("Status: " + response.status)

    } catch (error) { // when URL is wrong || network connection fails -> show error
        console.log("An error has occurred: " + error.message);
    }
}

createPost();