import { useState } from 'react';
import { createSession } from './services';
import loadingImage from './images/VenusAnimated.gif';
import './Login.css';

const Login = function ({ onLogin }) {
  const [username, setUsername] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState('');

  const onChange = (e) => {
    setUsername(e.target.value);
    setIsDisabled(!e.target.value);
  };

  const login = () => {
    setIsPending(true);
    createSession({ username })
      .then((userinfo) => {
        setIsPending(false);
        setStatus('');
        onLogin({ username, info: userinfo.info });
      })
      .catch((err) => {
        setIsPending(false);
        setStatus(err.error);
      });
  };

  if (isPending) {
    return (
      <div className="pending">
        <img align="middle" className="loading" src={loadingImage} alt="Loading" />
      </div>
    );
  }

  return (
    <div className="login">
      <div className="status">{status}</div>
      <div className="login-request">Logging in to unlock hidden beer gems and get delightfully tipsy</div>
      <div className="welcome-text"> Brewscape: <br></br>Uncover Fresh Crafted Delights </div>
      
      <div className="input-container">
      <label>
        <input onChange={onChange} value={username} placeholder='Username'/>
      </label>
      <button className="login-button" onClick={login} disabled={isDisabled || isPending}>
        {' '}
        Login{' '}
      </button>
      </div>
      <h3> Elevate your beverage collection with exclusive brews, <br></br>all priced at just $3.99 per bottle! </h3>
    </div>
  );
};

export default Login;
