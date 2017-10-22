import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "./../containers/mainContainer";
import Info from "./../components/info";
import Add from "./../containers/addContainer";
import Notfound from "./../components/notfound";

const _routesJSX = <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/info" exact component={Info} />
                    <Route path="/add" exact component={Add} />
                    <Route path="*" component={Notfound} />
                  </Switch>;

export default _routesJSX;
