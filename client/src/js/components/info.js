import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Info extends Component{

  constructor(props){
    super(props);

    this._goBackButtonJSX = <Link to="/" className="btn btn-primary">{"Go Back"}</Link>;

    this._alertListJSX = <div className="container">
                          <div className="alert alert-success"><strong>green</strong> color indicates a completed <strong>TODO</strong></div>
                          <div className="alert alert-info"><strong>sky blue</strong> color indicates a pending <strong>TODO</strong></div>
                          <div className="alert alert-warning"><strong>orange</strong> color indicates an expired <strong>TODO</strong></div>
                          {this._goBackButtonJSX}
                        </div>;


    this._componentLayoutJSX = this._alertListJSX
  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
