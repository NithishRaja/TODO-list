import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "./../components";
import Info from "./../components/info";
import Notfound from "./../components/notfound";

const _routesJSX = <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/info" exact component={Info} />
                    <Route path="*" component={Notfound} />
                  </Switch>;

export default _routesJSX;
