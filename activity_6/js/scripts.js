
var messages = [];

const data = [
    { text: "Hello, how are you?", direction: "in" },
    { text: "I'm doing well, thanks!", direction: "out" }
];


function Message(text, direction) {
    this.text = text;
    this.direction = direction;
}


function addMessageHandler(event) {
  
    const messageText = document.getElementById('message-input').value;

  
    let direction = "";
    switch (event.target.id) {
        case 'send-button':
            direction = "out";
            break;
        case 'reply-button':
            direction = "in";
            break;
        default:
            return;
    }


    const newMessage = new Message(messageText, direction);

   
    messages.push(newMessage);


    const messageElement = document.createElement("div");
    messageElement.classList.add(direction === "out" ? "out-message" : "in-message");
    messageElement.textContent = messageText;


    document.getElementById('message-container').appendChild(messageElement);

  
    document.getElementById('message-input').value = "";
}


function loadSeedData() {
    data.forEach(item => {
        const newMessage = new Message(item.text, item.direction);
        messages.push(newMessage);

        const messageElement = document.createElement("div");
        messageElement.classList.add(item.direction === "out" ? "out-message" : "in-message");
        messageElement.textContent = item.text;

        document.getElementById('message-container').appendChild(messageElement);
    });
}


function init() {
   
    loadSeedData();

   
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
}


init();
