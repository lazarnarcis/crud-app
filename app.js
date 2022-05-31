let messages = localStorage.getItem("messages") || [];
let messageText = document.querySelector("#message");

function sendMessage() {
    let valMessage = messageText.value;
    if (valMessage == "") return;
    messages.push(valMessage);
    localStorage.setItem("messages", JSON.stringify(messages));
    messageText.value = "";
    showMessages();
}

messageText.addEventListener("keypress", function (event) {
    if (event.key == "Enter") sendMessage();
});

if (messages.length) messages = JSON.parse(messages);

function showMessages() {
    let generalDivMessages = document.querySelector("#messages");
    generalDivMessages.innerText = '';
    for (let i = 0; i < messages.length; i++) {
        let textMsg = document.createElement("p");
        textMsg.innerText = messages[i];
        generalDivMessages.appendChild(textMsg);
    }
}

showMessages();