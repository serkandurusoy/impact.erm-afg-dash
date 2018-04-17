import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
import { Contact, Heat, Home, Mpc, NotFound, Pdm, Provinces } from '../pages';

const Router = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/heat" exact component={Heat} />
      <Route path="/mpc" exact component={Mpc} />
      <Route path="/provinces" exact component={Provinces} />
      <Route path="/pdm" exact component={Pdm} />
      <Route component={NotFound} />
    </Switch>
    <footer className="footer">
      <div className="footer__left">
        <img src={logoEu} alt="EU" />
      </div>
      <div className="footer__right">
        <div className="footer__logo">
          <img src={logoReach} alt="REACH" />
        </div>
        <div className="footer__logo">
          <img src={logoPremiere} alt="Premiere Urgence Internationale" />
        </div>
        <div className="footer__logo">
          <img src={logoSolidarites} alt="Solidarites" />
        </div>
        <div className="footer__logo">
          <img src={logoPeopleInNeed} alt="People in Need" />
        </div>
        <div className="footer__logo">
          <img src={logoNorwegian} alt="Norwegian Refugee Council" />
        </div>
        <div className="footer__logo">
          <img src={logoDrc} alt="Danish Refugee Council" />
        </div>
        <div className="footer__logo">
          <img src={logoDacaar} alt="Dacaar" />
        </div>
        <div className="footer__logo">
          <img src={logoAction} alt="Action Contre La Faim" />
        </div>
        <div className="footer__logo">
          <img src={logoActed} alt="Acted" />
        </div>
      </div>
    </footer>
  </div>
);

export default Router;
