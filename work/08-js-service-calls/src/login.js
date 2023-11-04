// import {fetchSession, fetchUser,fetchWord, fetchUpdateWord,fetchDelete} from './services.js';
// import * as ui from './ui.js';

// // Define variables to store DOM elements
// const loginForm = document.querySelector('#login-form');
// const loginError = document.querySelector('#login-error');
// const wordView = document.querySelector('#word-view');
// const wordForm = document.querySelector('#word-form');
// const wordError = document.querySelector('#word-error');
// const usernameDisplay = document.querySelector('#username-display');
// const logoutButton = document.querySelector('#logout-button');

// // Define event listeners
// loginForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const username = event.target.elements.username.value;
//     fetchUser(username)
//         .then(() => {
//             return fetchWord();
//         })
//         .then((word) => {
//             ui.render(username, word);
//         })
//         .catch((error) => {
//             if (error.error === 'network-error') {
//                 ui.showLoginError('There was a problem connecting to the server. Please try again later.');
//             } else {
//                 ui.showLoginError('Invalid username. Please try again.');
//             }
//         });
// });

// logoutButton.addEventListener('click', () => {
//     fetchDelete()
//         .then(() => {
//             ui.render();
//         })
//         .catch((error) => {
//             if (error.error === 'network-error') {
//                 ui.showWordError('There was a problem connecting to the server. Please try again later.');
//             } else {
//                 ui.showWordError('There was a problem logging out. Please try again.');
//             }
//         });
// });

// wordForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const word = event.target.elements.word.value;
//     fetchUpdateWord(word)
//         .then(() => {
//             ui.showWordError('Word updated successfully.');
//         })
//         .catch((error) => {
//             if (error.error === 'network-error') {
//                 ui.showWordError('There was a problem connecting to the server. Please try again later.');
//             } else {
//                 ui.showWordError('There was a problem updating the word. Please try again.');
//             }
//         });
// });

// // Define initial page load logic
// fetchSession()
//     .then((session) => {
//         if (session.username) {
//             return fetchWord()
//                 .then((word) => {
//                     ui.render(session.username, word);
//                 });
//         } else {
//             ui.render('', '');// Show the initial UI with empty username and storedWord
//         }
//     })
//     .catch((error) => {
//         if (error.error === 'network-error') {
//             ui.showLoginError('There was a problem connecting to the server. Please try again later.');
//         } else {
//             ui.showLoginError('There was a problem checking for an existing session. Please try again.');
//         }
//     });
import {fetchSession, fetchUser,fetchWord, fetchUpdateWord,fetchDelete} from './services.js';
import * as ui from './ui.js';

// Define variables to store DOM elements
const app = document.querySelector('#app');

// Define event listeners
app.addEventListener('click', (event) => {
    if (event.target.matches('.login')) {
        event.preventDefault();
        const username = app.querySelector('.input').value;
        fetchUser(username)
            .then(() => {
                return fetchWord();
            })
            .then((word) => {
                ui.render(username, word);
            })
            .catch((error) => {
                if (error.error === 'network-error') {
                    ui.showLoginError('There was a problem connecting to the server. Please try again later.');
                } else {
                    ui.showLoginError('Invalid username. Please try again.');
                }
            });
    } else if (event.target.matches('.delete')) {
        fetchDelete()
            .then(() => {
                ui.render();
            })
            .catch((error) => {
                if (error.error === 'network-error') {
                    ui.showWordError('There was a problem connecting to the server. Please try again later.');
                } else {
                    ui.showWordError('There was a problem logging out. Please try again.');
                }
            });
    } else if (event.target.matches('.update')) {
        event.preventDefault();
        const word = app.querySelector('.input').value;
        fetchUpdateWord(word)
        .then(response => {
            if (response.error) {
                throw response;
            } else {
                const { username, storedWord } = response;
                ui.showWordError(`Word updated successfully. Username: ${username}, Stored Word: ${storedWord}`);
            }
        })
            .catch((error) => {
                if (error.error === 'network-error') {
                    ui.showWordError('There was a problem connecting to the server. Please try again later.');
                } else {
                    ui.showWordError('There was a problem updating the word. Please try again.');
                }
            })
            // .then(() => {
            //     ui.showWordError(`Word updated successfully. Username: ${username}, Stored Word: ${storedWord}`);
            // });
           
            
    }
});

// Define initial page load logic
fetchSession()
    .then((session) => {
        if (session.username) {
            return fetchWord()
                .then((word) => {
                    ui.render(session.username, word);
                });
        } else {
            ui.render('', '');// Show the initial UI with empty username and storedWord
        }
    })
    .catch((error) => {
        if (error.error === 'network-error') {
            ui.showLoginError('There was a problem connecting to the server. Please try again later.');
        } else {
            ui.showLoginError('There was a problem checking for an existing session. Please try again.');
        }
    });