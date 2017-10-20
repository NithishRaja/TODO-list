import React, {Component} from "react";
import Navbar from "./navbar";
import Todo from "./todo";

export default class Main extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div className="container-fluid">
                                <Navbar />
                                <div className="container">
                                  <Todo />
                                  <Todo />
                                  <Todo />
                                </div>
                              </div>;
  }

  render(){
    return(
      this._componentLayoutJSX
    );
  }

}
