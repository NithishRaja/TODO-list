import React from 'react';
import {Route, Switch} from "react-router-dom";
import Navbar from "./../containers/navbarContainer";

const _routesJSX = <Switch>
                    <Route path="*" component={Navbar} />
                  </Switch>;

export default _routesJSX;
