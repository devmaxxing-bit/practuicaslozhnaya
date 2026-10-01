document.getElementById("show-id").addEventListener("click", () => {
    const info = document.getElementById("user-info");
    
    // BUG: data-user-id in HTML becomes userId in JS dataset (camelCase)
    // Trying to access 'user-id' exactly as written in HTML fails
    const id = info.dataset["userId"]; // Should be info.dataset.userId or info.dataset["userId"]
    
    console.log("The ID is: " + id);
    alert("Check console for ID: " + id);
});
