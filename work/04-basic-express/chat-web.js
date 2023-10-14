const chatWeb = {
  chatPage: function (chat) {
    // Fill in/modify anything below!
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="/css/chat.css" />
        </head>
        <body>
          <div id="chat-app">
          <div class="display-panel">
            ${chatWeb.getUserList(chat)}
            ${chatWeb.getMessageList(chat)}
            </div>
            ${chatWeb.getOutgoing(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function (chat) {
    return (
      `<ol class="messages">` +
      Object.values(chat.messages)
        .map(
          (message) => `
      <li>
        <div class="message">
          <span class="sender">${message.sender}</span>
          <p class="message-text">${message.text}</p>
        </div>
      </li>
    `
        )
        .join("") +
      `</ol>`
    );
  },
  getUserList: function (chat) {
    return (
      `<ul class="users">` +
      Object.values(chat.users)
        .map(
          (user) => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `
        )
        .join("") +
      `</ul>`
    );
  },
  getOutgoing: function () {
    return `
    <form action="/chat" method="POST" class="form">
    <div class="form-text">
    <input type="text" name="text" id="text" placeholder="Enter Message" />
  </div>
      <input type="hidden" class="sender" name="username" value="Bao" placeholder="Enter Message" />
      <button type="submit">Send</button>
    </form>
    `;
  },
};
module.exports = chatWeb;
