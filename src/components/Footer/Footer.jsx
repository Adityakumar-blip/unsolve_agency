import React from 'react';
import logo from '../../assets/unsolve.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" className="logo-bottom" />
      </div>
      <div className="footer-email">
      <div class="paragraph-n">Unlock the Mystery of Digital Solutions - Say Hii to the Unsolved! ✋</div>
      <div class="footer__email">Unsolved.agency@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
