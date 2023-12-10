import './Home.css';
import DisplayBeer from '../DisplayBeer';

const Home = ({ userInfo, onLogout, onBeerOrdering, onPurchasing, setUserState }) => {
    // Render user info & orders
    let content;
    if (!userInfo || !userInfo.info) {
      // eslint-disable-next-line react/no-unescaped-entities
      content = <h3> Hey there! It seems you haven't tried our latest brews yet.<br></br> Why not dive into our craft beer selection and craft your own refreshing blend? </h3>;
    } else {
      content = (
        <div>
          <h3> Your Craft Beer Collection </h3>
          <DisplayBeer userState={userInfo} onPurchasing={onPurchasing} setUserState={setUserState} />
        </div>
      );
    }
  
    return (
      <><div className="login_page">
            <h1>Hi {userInfo ? userInfo.username : 'Guest'}!</h1>
            <div> {content} </div>
            <div className="button_container">
            <button onClick={onBeerOrdering}> Thirsty for more fun? Grab another round! </button>
            <button onClick={onLogout}> Logout </button>
            </div>
        </div>
            </>
    );
  };

export default Home;