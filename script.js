window.onload = function() {
    var name = prompt("Please enter your name:");
    if (name) {
        document.getElementById("username").textContent = name;
    } else {
        document.getElementById("username").textContent = "User";
    }
}