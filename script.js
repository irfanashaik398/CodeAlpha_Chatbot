function sendMessage() {
let input = document.getElementById("user-input").value;
let chatBox = document.getElementById("chat-box");

chatBox.innerHTML += "<p><b>You:</b> " + input + "</p>";

let response = "";

if (input.toLowerCase() === "hi") {
response = "Hello!";
}
else if (input.toLowerCase() === "how are you") {
response = "I am fine!";
}
else if (input.toLowerCase() === "your name") {
response = "I am your chatbot!";
}
else {
response = "Sorry, I don't understand.";
}

chatBox.innerHTML += "<p><b>Bot:</b> " + response + "</p>";

document.getElementById("user-input").value = "";
}