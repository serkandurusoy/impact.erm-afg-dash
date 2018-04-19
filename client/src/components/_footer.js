import React from 'react';
import logoEu from '@impact/prototype/dist/images/logos/eu@2x.png';
import logoReach from '@impact/prototype/dist/images/logos/reach@2x.png';
import logoPremiere from '@impact/prototype/dist/images/logos/premiere@2x.png';
import logoSolidarites from '@impact/prototype/dist/images/logos/solidarites@2x.png';
import logoPeopleInNeed from '@impact/prototype/dist/images/logos/people-in-need.svg';
import logoNorwegian from '@impact/prototype/dist/images/logos/norvegian.svg';
import logoDrc from '@impact/prototype/dist/images/logos/drc@2x.png';
import logoDacaar from '@impact/prototype/dist/images/logos/dacaar@2x.png';
import logoAction from '@impact/prototype/dist/images/logos/action@2x.png';
import logoActed from '@impact/prototype/dist/images/logos/acted@2x.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer__left">
      <img src={logoEu} />
    </div>
    <div className="footer__right">
      <div className="footer__logo">
        <img src={logoReach} />
      </div>
      <div className="footer__logo">
        <img src={logoPremiere} />
      </div>
      <div className="footer__logo">
        <img src={logoSolidarites} />
      </div>
      <div className="footer__logo">
        <img src={logoPeopleInNeed} />
      </div>
      <div className="footer__logo">
        <img src={logoNorwegian} />
      </div>
      <div className="footer__logo">
        <img src={logoDrc} />
      </div>
      <div className="footer__logo">
        <img src={logoDacaar} />
      </div>
      <div className="footer__logo">
        <img src={logoAction} />
      </div>
      <div className="footer__logo">
        <img src={logoActed} />
      </div>
    </div>
  </footer>
);

export default Footer;
