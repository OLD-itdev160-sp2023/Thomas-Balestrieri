var messages = [];

// Enum, Allows for custom 'states'
const messageType = {
  out: "out-message",
  in: "in-message",
  unkown: "unknown-message",
};

var data = [
  {
    type: messageType.out,
    user: "Thomas",
    message: "Hey do you have any lunch plans?",
  },
  {
    type: messageType.in,
    user: "Joe",
    message: "Hi Thomas. No, how about qudoba?",
  },
  {
    type: messageType.out,
    user: "Thomas",
    message: "Okay, Lets go!",
  },
];

//constructor // Formats data into an object
function Message(type, user, message) {
  this.type = type;
  this.user = user;
  this.message = message;
}

// Creates message element in the DOM
function createMessageElement(message) {
  var messageText = document.createTextNode(
    message.user + ": " + message.message
  );
  var messageEl = document.createElement("div");
  messageEl.appendChild(messageText);

  messageEl.className = message.type;

  return messageEl;
}

// The Message Handler implements all neccesary functions to create message front-end and backend
function addMessageHandler(event) {
  var user, type;
  var messageInput = document.getElementById("message-input");
  var messageContainerEL = document.getElementById("message-container");

  switch (event.target.id) {
    case "send-button":
      user = "Thomas";
      type = messageType.out;
      break;

    case "reply-button":
      user = "Joe";
      type = messageType.in;
      break;
    default:
      user = "Unkown";
      type = messageType.unkown;
      break;
  }

  //create new message

  if (messageInput.value) {
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    var el = createMessageElement(message);

    messageContainerEL.appendChild(el);

    messageInput.value = "";
  }
}
function loadSeedData() {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var message = new Message(item.type, item.user, item.message);
    messages.push(message);
  }
  var messageContainer = document.getElementById("message-container");

  for (var i = 0; i < messages.length; i++) {
    var el = createMessageElement(messages[i]);

    console.log(el);

    messageContainer.appendChild(el);
  }
}

var init = function () {
  document.getElementById("send-button").onclick = addMessageHandler;
  document.getElementById("reply-button").onclick = addMessageHandler;

  loadSeedData();
};

init();
