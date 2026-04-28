function changeText() {
    document.getElementById("dynamicText").innerText =
        "🎉 You clicked the button! This text has changed.";
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

function showGreeting() {
    const name = document.getElementById("username").value;
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
        message = "Good Morning";
    } else if (hour < 18) {
        message = "Good Afternoon";
    } else {
        message = "Good Evening";
    }

    if (name) {
        message += ", " + name + "!";
    } else {
        message += "!";
    }

    document.getElementById("greeting").innerText = message;
}