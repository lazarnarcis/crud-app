let messages = localStorage.getItem("messages") || [];

function sendMessage() {
    let messageText = document.querySelector("#message");
    let valMessage = document.querySelector("#message").value;
    if (valMessage == "") return;
    messages.push(valMessage);
    localStorage.setItem("messages", JSON.stringify(messages));
    messageText.value = "";
    showMessages();
}

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