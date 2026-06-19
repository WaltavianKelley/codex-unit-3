    try {
        console.log("Attempting to access browser features...");
localStorage.setItem("myName", "walt");
const pTag = document.querySelector("p");
} catch(error){
    console.log("There's an error.", error)
}
