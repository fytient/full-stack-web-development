import { MESSAGES } from './constant';

const state = {
  messages: [],
  isLoggedIn: false,
  isLoginPending: true,
  isMessagePending: false,
  isUsersPending: false,
  username: {},
  lastAddedMessageId: '',
  error: '',
  showError: false,
};

export function waitOnLogin() {
  state.isLoggedIn = false;
  state.isLoginPending = true;
  state.username = {};
  state.messages = [];
  state.error = '';
  state.showError = false;
}

export function login() {
  state.isLoggedIn = true;
  state.isLoginPending = false;
  state.username = username;
  state.error = '';
  state.lastAddedMessageId = '';
  state.showError = false;
}

export function logout() {
  state.isLoggedIn = false;
  state.isLoginPending = false;
  state.username = {};
  state.messages = [];
  state.error = '';
  state.showError = false;
}

export function waitOnMessages() {
  state.messages = [];
  state.isMessagePending = true;
  state.error = '';
  state.showError = false;
}

export function setMessages(messages) {
  state.messages = messages;
  state.isMessagePending = false;
  state.error = '';
  state.lastAddedMessageId = '';
  state.showError = false;
}

export function addMessage({ id, message }) {
  state.messages[id] = message;
  state.lastAddedMessageId = id;
  state.error = '';
}

export function setError(error) {

  if (!error) {
    state.showError = false;
    state.error = '';
    
  }else {
    state.showError = true;
    state.error = MESSAGES[error] || MESSAGES.default;
}
}
export function waitOnUsers() {
	state.username = {};
	state.isUsersPending = true;
	state.error = '';
    state.showError = false;
}
export function setUsers(users) {
	state.username = users;
	state.isUsersPending = false;
	state.error = '';
    state.showError = false;
}

export function setLoginUsers(data) {
    state.isMessagePending = false
      state.users = data;
    state.error = "";
    state.showError = false;
  }
export default state;
