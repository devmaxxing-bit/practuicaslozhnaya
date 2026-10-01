// BUG: This code never runs because the event isn't attached correctly
const btn = document.getElementById("magic-btn"); // ID typo here!
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
    msg.innerText = "You found the surprise! 🎉";
});
