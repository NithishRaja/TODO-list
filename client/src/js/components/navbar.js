import React, {Component} from "react";

export default class Navbar extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <nav className="navbar navbar-default">
                                <div className="container">
                                  <ul className="nav navbar-nav">
                                    <li className="active"><a>All</a></li>
                                    <li><a>Completed</a></li>
                                    <li><a>Pending</a></li>
                                  </ul>
                                </div>
                              </nav>;
  }

  render(){
    return(
      this._componentLayoutJSX
    );

  }

}
