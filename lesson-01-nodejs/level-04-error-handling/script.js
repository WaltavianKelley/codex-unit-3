try{
    console.log("Attempting to access browser features...");
    localStorage.setItem("myDog", "Nox");
    document.querySelector("p");
} catch(error) {
    console.log("There is an error", error)
}

