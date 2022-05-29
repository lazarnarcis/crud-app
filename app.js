let messages = [];

function sendMessage() {
    let messageText = document.querySelector("#message");
    let valMessage = document.querySelector("#message").value;
    messages.push(valMessage);
    messageText.value = "";
    showMessages();
}

function showMessages() {
    let generalDivMessages = document.querySelector("#messages");
    generalDivMessages.innerText = '';
    for (let i = 0; i < messages.length; i++) {
        let textMsg = document.createElement("p");
        textMsg.innerText = messages[i];
        generalDivMessages.appendChild(textMsg);
    }
}