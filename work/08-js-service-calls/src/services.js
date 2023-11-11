export const fetchSession = () => {
  return fetch('/api/session')
      .catch(err => Promise.reject({ error: 'network-error' }))
      .then(response => {
          return response.json();
      });
};

export const fetchUser = (username) => {
  return fetch('/api/session', {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
          },
          body: JSON.stringify({ username }),
      })
      .catch(err => Promise.reject({ error: 'network-error' }))
      .then(response => {
          if (response.ok) {
              return response.json()
          } else {
              return response.json().then(err => Promise.reject(err))
          }
      });
};

export const fetchWord = () => {
  return fetch('/api/word')
      .then(response => {
          if (!response.ok) {
              // The server responded with an error status code
              // Throw an error to be caught in the catch block
              throw new Error('Server error');
          }
          // The server responded with a success status code
          // Parse the JSON in the response
          return response.json();
      })
      .then(data => {
        return data.storedWord;  // Return the 'word' property of the data
    })
      .catch(err => {
          if (err.message === 'Server error') {
              // The server responded with an error status code
              return Promise.reject({ error: 'server-error' });
          } else {
              // There was a network error
              return Promise.reject({ error: 'network-error' });
          }
      });
};

export const fetchUpdateWord = (word) => {
  return fetch('/api/word', {
          method: 'PUT',
          headers: {
              'content-type': 'application/json',
          },
          body: JSON.stringify({ word }),
      })
      .catch(err => Promise.reject({ error: 'network-error' }))
      .then( response => {
        if(!response.ok) { 
          return response.json().then( err => Promise.reject(err) );
        }
        return response.json(); 
      })
      .then(response => {
        // The word was successfully updated on the server
        // Now update the UI with the new word
        updateUIWithNewWord(word);
        return response;
      });
      
};
function updateUIWithNewWord(word) {
  const wordElement = document.querySelector('.stored-word');
  wordElement.textContent =  `Stored Word: ${word}`;
}

export const fetchDelete = () => {
  return fetch('/api/session', {
          method: 'DELETE',
          headers: {
              'content-type': 'application/json',
          },
      })
      .catch(err => Promise.reject({ error: 'network-error' }))
      .then(response => {
          if (response.ok) {
              return response.json()
          }
      });
};


