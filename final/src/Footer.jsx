import './Footer.css';

function Footer({onNav}) {
    return (
        <footer className="footer">
              <ul className="footer__list footer__work">
                <li><a href='/' onClick={onNav}>Home</a></li>


            </ul>
            <ul className="footer__list footer__contact">
                <li><a href="/about" onClick={onNav}>About</a></li>


            </ul>
            <ul className="footer__list footer__policy">
                <li><a href="/menu" onClick={onNav}>Menu</a></li>
            </ul>
        </footer>
    );
}

export default Footer;