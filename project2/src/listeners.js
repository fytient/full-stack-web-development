// services.js
import {
  fetchSendMessage,
  fetchGetMessages,
  fetchUserStatus,
  fetchLogin,
  fetchLogout,
  fetchSession,
  fetchLoginUsers,
} from "./service";

// render.js
import render from "./render";

// state.js
import {
  MESSAGES,
  waitOnLogin,
  login,
  logout,
  waitOnMessages,
  setMessages,
  addMessage,
  setError,
} from "./state";

// Adding ability to send a chat message
export function addAbilityToSendMessage({ state, appEl }) {
  appEl.addEventListener("submit", (e) => {
    if (!e.target.classList.contains("add-message__form")) {
      return;
    }
    e.preventDefault();

    const messageText = appEl.querySelector(".add-message__text").value;
    waitOnMessages();
    render({ state, appEl }); // show loading state
    fetchSendMessage(messageText)
      .then((messages) => {
        setMessages(messages);
        // state.messages.push(messages); // Add the new message to the state
        render({ state, appEl });
      })
      .catch((err) => {
        setError(err?.error || "ERROR"); // Ensure that the error ends up truthy
        render({ state, appEl });
      });
  });
}

// Adding ability to login
export function addLoginListener({ state, appEl }) {
  appEl.addEventListener("submit", (e) => {
    if (!e.target.classList.contains("login__form")) {
      return;
    }
    e.preventDefault();

    const username = appEl.querySelector(".login__username").value;
    waitOnLogin();
    render({ state, appEl }); // show loading state
    fetchLogin(username)
      // .then(() => {
      //   login(username);
      //   render({ state, appEl });

      // })
      .then(({ error, user }) => {
        state.isLoggedIn = true;
        state.error = error; // Clear the error
        state.user = user;
        render({ state, appEl });
      })
      .catch((err) => {
        setError(err?.error || "ERROR"); // Ensure that the error ends up truthy
        render({ state, appEl });
      });
  });
}

// Adding ability to logout
export function addLogoutListener({ state, appEl }) {
  appEl.addEventListener("click", (e) => {
    if (!e.target.classList.contains("logout__button")) {
      return;
    }
    logout();
    render({ state, appEl });
    fetchLogout().catch((err) => {
      setError(err?.error || "ERROR"); // Ensure that the error ends up truthy
      render({ state, appEl });
    });
  });
}
