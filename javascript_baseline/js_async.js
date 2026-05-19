
function simulateLogin(username) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            status: "success",
            user: username
        }), 1000);
    });
}

async function handleLogin(username) {
    let result = await simulateLogin(username);
    console.log("Result für user: " +  result.user, "was " + result.status)
}

handleLogin("masha@gmail.com");



