import React, {Component} from "react";

export default class Info extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div className="container">
                                <div className="alert alert-success">{"this color indicates a completed TODO"}</div>
                                <div className="alert alert-info">{"this color indicates a pending TODO"}</div>
                                <div className="alert alert-warning">{"this color indicates an expired TODO"}</div>
                              </div>;
  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
