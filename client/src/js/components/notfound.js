import React, {Component} from "react";

export default class Notfound extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div className="jumbotron">
                                <h1>{"404, Page not found!"}</h1>
                                <p>{"The page you are looking for does not exist or has been moved to a diffrent location"}</p>
                                <p>click <a>here</a> to go back</p>
                              </div>;
  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
