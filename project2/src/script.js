import { SERVER, CLIENT } from './constant';
import state, {
  login,
  logout,
  waitOnLogin,
  waitOnMessages,
  setMessages,
  setError,
  setUsers, 
} from './state';
import {
  fetchSendMessage,
  fetchGetMessages,
  fetchSession,
  fetchLoginUsers,
} from './service';
import {render, renderMessages} from './render';
import {
  addLoginListener,
  addAbilityToSendMessage,
  addLogoutListener,
} from './listeners';

const appEl = document.querySelector('#app');

render({ state, appEl });
addLoginListener({ state,  appEl });
addLogoutListener({ state, appEl });
addAbilityToSendMessage({ state, appEl });
checkForSession();


function checkForSession() {
    waitOnLogin();
    console.log("state,", state.messages)
    render({ state, appEl });
    fetchSession()
        
        .then(() => {
            login();
            waitOnLogin();
            waitOnMessages();
            render({ state, appEl });
            return Promise.all([fetchLoginUsers(), fetchGetMessages()]);
        })
        // .then((data) => {
        //     setUsers(data[0]);
        //     setMessages(data[1]);
        //     render({ state, appEl });
        // })
        .catch((err) => {
            // return Promise.reject(err);
            state.isLoginPending = false;
            render({ state, appEl });

            // if (err?.error === SERVER.AUTH_MISSING) {
                
            //     logout();
            //     render({ state, appEl });
            // } else {
            //     setError(err?.error || 'ERROR');
            //     render({ state, appEl });
            // }
        })
        .then((users) => {
			setUsers(users);
			render({ state, appEl });
			return fetchGetMessages();
		})
        .then((messages) => {
			setMessages(messages);
			render({ state, appEl });
		})
        .then(() => {
            setInterval(refreshUsersAndMessages, 5000);
        });
}

function refreshUsersAndMessages() {
    if (!state.isLoggedIn) return;

    fetchLoginUsers()
        .then((users) => {
            setUsers(users);
            renderUsers({ state, appEl });
            return fetchGetMessages();
        })
        .then((messages) => {
            // This line makes sure that if there is no new message, it will not render.
            if (messages.length === state.messages.length) return;
            setMessages(messages);
            renderMessages({ state, appEl });
        })
        .catch((err) => {
            if (err?.error === SERVER.AUTH_MISSING) {
                logout();
                render({ state, appEl });
            } else {
                setError(err?.error || 'ERROR');
                render({ state, appEl });
            }
        });
}

