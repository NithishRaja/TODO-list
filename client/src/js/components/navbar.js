import React, {Component} from "react";

export default class Navbar extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div>
                                <button>completed</button>
                                <button>all</button>
                                <button>remaining</button>
                              </div>;

  }

  render(){
    return(
      this._componentLayoutJSX
    );

  }

}
