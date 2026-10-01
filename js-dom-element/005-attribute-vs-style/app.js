document.getElementById("color-btn").addEventListener("click", () => {
    const title = document.getElementById("title");
    
    // BUG: Trying to set color as an attribute instead of a style property
    title.style.color = "blue";
});
