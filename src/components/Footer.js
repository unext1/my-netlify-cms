import React from 'react';
// import { Link } from 'gatsby';

import logo from '../img/logo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer" style={{ marginTop: 50 }}>
        <div className="content has-text-centered">
          <img src={logo} alt="Kaldi" style={{ width: '14em', height: '10em' }} />
        </div>
        <div className="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed{' '}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
