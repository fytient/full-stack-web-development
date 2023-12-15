import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Mainpage from "./Mainpage";
// import Footer from './Footer';
import Skiplink from "./Skiplink";
import Login from "./Login";
import Home from "./page/Home";
import { checkSession, endSession } from "./services";
import BeerOrder from "./BeerOrder";
import Purchasepage from "./Purchasepage";
import About from "./page/About";
import Menu from "./page/Menu";
import Photo from "./page/Photo";

function App() {
  const [page, setPage] = useState("/");
  const [theme, setTheme] = useState("light");
  const [userState, setUserState] = useState({
    isLoggedIn: false,
    isPending: false,
    isBeerOrdering: false,
    isPurchasing: false,
  });
  const [total, setTotal] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState("");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  function onNav(event) {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    setPage(target);
  }

  useEffect(() => {
    checkSession()
      .then((userInfo) => {
        setUserState({
          isLoggedIn: true,
          isPending: false,
          username: userInfo.username,
          info: userInfo.info,
        });
        setTotal(0);
      })
      .catch(() => {
        setUserState({
          isLoggedIn: false,
          isPending: false,
        });
      });
  }, []); // only run on initial render

  const login = function ({ username, info }) {
    setUserState({
      isLoggedIn: true,
      isPending: false,
      username,
      info,
    });
  };

  const beerOrdering = function () {
    setUserState({
      isLoggedIn: true,
      isBeerOrdering: true,
      username: userState.username,
      info: userState.info,
    });
  };

  const back = function () {
    setUserState({
      isLoggedIn: true,
      isBeerOrdering: false,
      username: userState.username,
      info: userState.info,
      isPurchasing: false,
    });
  };

  let content;

  const logout = function () {
    setUserState({
      ...userState,
      isPending: true,
    });
    endSession()
      .then(() => {
        setUserState({
          isLoggedIn: false,
          isPending: false,
        });
      })
      .catch(() => {
        setUserState({
          ...userState,
          isPending: false,
        });
      });
  };

  if (userState.isPending) {
    return <div className="app">Loading...</div>;
  }

  const Purchase = function (price) {
    setUserState({
      isLoggedIn: true,
      isBeerOrdering: false,
      username: userState.username,
      info: userState.info,
      isPurchasing: true,
    });
    setTotal(price);
  };

  switch (page) {
    case "/":
      content = userState.isLoggedIn ? (
        userState.isBeerOrdering ? (
          <BeerOrder userInfo={userState} onBack={back} />
        ) : (
          <Home
            userInfo={userState}
            onLogout={logout}
            onBeerOrdering={beerOrdering}
            onPurchasing={Purchase}
            setUserState={setUserState}
          />
        )
      ) : (
        <Login onLogin={login} />
      );
      break;
    case "/about":
      content = <About />;
      break;
    case "/menu":
      content = <Menu />;
      break;
    case "/photo":
      content = <Photo />;
      break;
    default:
      content = userState.isLoggedIn ? (
        userState.isBeerOrdering ? (
          <BeerOrder userInfo={userState} onBack={back} />
        ) : (
          <Home
            userInfo={userState}
            onLogout={logout}
            onBeerOrdering={beerOrdering}
            onPurchasing={Purchase}
            setUserState={setUserState}
          />
        )
      ) : (
        <Login onLogin={login} />
      );
  }

  // if (userState.isLoggedIn) {

  //   // content = <Home userInfo={userState} onLogout={logout} onBeerOrdering={beerOrdering} onPurchasing={Purchase} setUserState={setUserState} />;
  //   if (userState.isBeerOrdering) {
  //     content = <BeerOrder userInfo={userState} onBack={back} />;
  //   }
  //   if (userState.isPurchasing) {
  //     content = <Purchasepage price={total} onBack={back} />;
  //   }
  // } else if (page === "/")  {
  //   content = <Login onLogin={login} />;
  // }
  if (userState.isLoggedIn && !userState.isBeerOrdering) {
    if (userState.isPurchasing) {
      content = <Purchasepage price={total} onBack={back} />;
    }
  } else if (page === "/") {
    content = <Login onLogin={login} />;
  }

  return (
    <div className={`app ${theme}`}>
      <div className="status">{status}</div>
      {/* {console.log('content', content)} */}
      {content}
      <Skiplink />
      <Header
        onNav={onNav}
        setPage={setPage}
        setTheme={setTheme}
        toggleTheme={toggleTheme}
      />
      <Mainpage page={page} onNav={onNav} setPage={setPage} />
      {/* <Footer onNav={onNav} setPage={setPage}/> */}
    </div>
  );
}

export default App;
