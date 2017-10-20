import React, {Component} from "react";

export default class Todo extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div className="panel panel-default">
                                <div className="panel-heading">
                                  title goes here <button className="btn btn-primary">expand/contract</button>
                                </div>
                                <div className="panel-body">
                                  description goes here
                                </div>
                                <div classname="panel-footer">
                                  <button className="btn btn-success">{"edit"}</button>
                                  <button className="btn btn-danger">{"delete"}</button>
                                </div>
                              </div>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
