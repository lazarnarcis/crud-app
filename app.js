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
        textMsg.innerHTML = messages[i] + " <button class='button" + i + "' onclick='showEditMessage(" + i + ");'>Update</button> <input type='text' placeholder='Edit message....' style='display: none' class='inputEdit" + i + "' /> <input style='display: none' class='buttonEdit" + i + "' type='button' onclick='editMessage(" + i + ")' value='Update Message' />";
        generalDivMessages.appendChild(textMsg);
    }
}

function showEditMessage (i) {
    let btn = document.querySelector(".button" + i);
    btn.style.display = "none";
    let inputEdit = document.querySelector(".inputEdit" + i);
    inputEdit.style.display = "inline";
    let buttonEdit = document.querySelector(".buttonEdit" + i);
    buttonEdit.style.display = "inline";
}

function editMessage (i) {
    let inputEdit = document.querySelector(".inputEdit" + i);
    let editValue = inputEdit.value;
    messages[i] = editValue;
    showMessages();
    localStorage.setItem("messages", JSON.stringify(messages));
}

showMessages();