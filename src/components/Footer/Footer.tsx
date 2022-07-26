import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/valutaLogo.svg';

import './Footer.scss';

const Footer: FC = () => {
  let navigate = useNavigate();

  return (
    <footer className="footer container">
      <div className="footer__container">
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="logo" />
        </div>

        <div className="footer__navigate">
          <nav className="nav">
            <ul className="nav__items">
              <li className="nav__item">
                <Link to="/privacy" className="nav__link">
                  Privacy
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/privacy#cookies" className="nav__link">
                  Cookies
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about" className="nav__link">
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/alternatives" className="nav__link">
                  Alternatives
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer__copyright">
        Copyright © 2021 <a href="https://inkofpixel.com/">inkOfPixel</a> Srl.
        All rights reserved
      </div>
    </footer>
  );
};
export default Footer;
