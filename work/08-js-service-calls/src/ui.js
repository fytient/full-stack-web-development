
const app = document.querySelector('#app');

const generateHtml = (username, storedWord) => {

    // const word = storedWord ? storedWord.word : '';
    // const word = storedWord && storedWord.word ? storedWord.word : '';
    if (!username && !storedWord) {
        return `
            <div class="container">
                <div class="info">
                    <div>Enter a username to login</div>
                <input
                    class="input"
                    type="text"
                    placeholder="username"
                    
                />
                <button class="login">Login</button>
            </div>
            <div class="error"></div>
        `
    } else {
        return `
            <div class="container">
                <div class="info">
                    <div>User: ${username}</div>
                    <div class="stored-word">Stored Word: ${storedWord || ''}</div>
                </div>
            
                <input
                    class="input"
                    type="text"
                    placeholder="Update your word"
                    
                />
                <div class="button-container">
                <button class="update">update</button>
                <button class="delete">Log out</button>
                </div>
            </div>
            <div class="error"></div>
        `
    }
}

export const render = (username, storedWord) => {
    app.innerHTML = generateHtml(username, storedWord);
}

export const showLoginError = (message) => {
    const errorElement = document.querySelector('.error');
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
};
export const showWordError = (message) => {
    const errorElement = document.querySelector('.error');
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
};

export { generateHtml };
