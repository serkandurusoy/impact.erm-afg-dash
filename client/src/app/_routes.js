import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Contact,
  Heat,
  Home,
  Mpc,
  NotFound,
  Pdm,
  Provinces,
  Province,
  HeatAsGrid,
  ChartFull,
} from '../pages';
import PROVINCE_INFO from '../constants/province-info';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/chart-full" exact component={ChartFull} />
    <Route path="/heat" exact component={Heat} />
    <Route path="/heat-as-grid" exact component={HeatAsGrid} />
    <Route path="/mpc" exact component={Mpc} />
    <Route path="/provinces" exact component={Provinces} />
    <Route
      path={`/provinces/:provinceSlug(${PROVINCE_INFO.map(
        ({ slug }) => slug,
      ).join('|')})`}
      exact
      component={Province}
    />
    <Route path="/pdm" exact component={Pdm} />
    <Route path="/contact" exact component={Contact} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
