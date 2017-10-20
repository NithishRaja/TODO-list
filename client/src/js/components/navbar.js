import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class Navbar extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <nav className="navbar navbar-default">
                                <div className="container">
                                  <ul className="nav navbar-nav">
                                    <li className="active"><Link to="/" id="all">All</Link></li>
                                    <li><Link to="/" id="completed">Completed</Link></li>
                                    <li><Link to="/" id="pending">Pending</Link></li>
                                  </ul>
                                  <ul className="nav navbar-nav navbar-right">
                                    <Link to="/info" className="btn btn-info">i</Link>
                                  </ul>
                                </div>
                              </nav>;
  }

  render(){
    return(
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector("#all"), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          event.preventDefault();
          console.log("all");
        }
      });

    Rx.Observable.fromEvent(document.querySelector("#completed"), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          event.preventDefault();
          console.log("completed");
        }
      });

    Rx.Observable.fromEvent(document.querySelector("#pending"), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          event.preventDefault();
          console.log("pending");
        }
      });

  }

}
