import React, {Component} from "react";
import Navbar from "./navbar";

export default class Main extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div>
                                <Navbar />
                              </div>;
  }

  render(){
    return(
      this._componentLayoutJSX
    );
  }

}
