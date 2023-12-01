export function render({ state, appEl }) {
    const html = `
    ${generateStatusHtml(state)}
      <main class="">
        ${generateHeaderHtml(state)}
        ${generateChatHtml(state)}
        
      </main>
    `;
    appEl.innerHTML = html;
  }
  
  function generateHeaderHtml(state) {
    if (state.isLoggedIn) {
      return generateLogoutHtml(state);
    } else {
      return generateLoginHtml(state);
    }
  }
  
  function generateChatHtml(state) {
    return `
      <div class="chat">
        
        
        ${generateMessagesHtml(state)}
        ${generateAddMessageHtml(state)}
      </div>
    `;
  }
  
  function generateStatusHtml(state) {
    // return `
    //   <div class="status">${state.error}</div>
    // `;
    if (!state.error) {
		return "";
	}
  return `
      <div class="error">${state.error}</div>
  `;
  }
  
  function generateMessagesHtml(state) {
    return `
      <ul class="messages">${generateMessagesListHtml(state)}</ul>
    `;
    
}
  
  
  function generateMessagesListHtml(state) {
    // return Object.values(state.messages).map((message) => {
    return state.messages.map((message) => {
      return `
        <li class="messages">
          <span class="message__user">${message.sender}:</span>
          <span class="message__text">${message.text}</span>
        </li>
      `;
    }).join('') || '<p>No messages yet, start chatting!</p>';
  }
  
  function generateAddMessageHtml(state) {
    if (!state.isLoggedIn) {
      return '';
    }
  
    return `
      <form class="add-message__form" action="#/add">
        <input class="add-message__text" placeholder="Type your message...">
        <button type="submit" class="add-message__button">Send</button>
      </form>
    `;
  }
  
  function generateLoginHtml(state) {
  
    if (state.isLoginPending) {
      return `
        <div class="login__waiting">Logging in...</div>
      `;
    }
	if (state.isLoggedIn) 
		return '';
	
  
    return (`
      <div class="login">
        <form class="login__form" action="#/login">
          <label>
            <span>Username:</span>
            <input class="login__username" value="">
          </label>
          <button class="login__button" type="submit">Login</button>
        </form>
      </div>
    `);

  }
  
  function generateLogoutHtml(state) {
    if (!state.isLoggedIn) {
		return "";
	}
    return `
      <div class="logout">
        <button class="logout__button">Logout</button>
      </div>
    `;
  }
export function renderUsers({ state, appEl }) {
	const usersEl = appEl.querySelector('.users');
	if (!usersEl) return;
	usersEl.innerHTML = generateUsersHTML(state);
}
export function renderMessages({ state, appEl }) {
	const messagesEl = appEl.querySelector('.messages');
	if (!messagesEl) return;
	messagesEl.innerHTML = generateMessagesHtml(state);
}
export default render;