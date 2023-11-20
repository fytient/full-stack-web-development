const messages = [{ sender: "A", text: "Hi" },
{ sender: "B", text: "Good Morning" },];

function addMessage(sender, text) {
  messages.push({
    sender: sender,
    text: text
  });
}
function getMessages() {
	return messages;
}

const chat = {
  addMessage,
  getMessages,
};

module.exports = chat