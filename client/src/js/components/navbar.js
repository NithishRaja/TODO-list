import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class Navbar extends Component{

  constructor(props){
    super(props);

    this._infoButtonJSX = <ul className="nav navbar-nav navbar-right">
                            <li><Link className="btn btn-info" to="/info">i</Link></li>
                          </ul>;

    this._componentLayoutJSX = <nav className="navbar navbar-default">
                                <div className="container">
                                  {this._infoButtonJSX}
                                </div>
                              </nav>;
  }

  render(){

    if(this.props.todoFilter === "all"){
      this._filterButtonJSX = <ul className="nav navbar-nav">
                                      <li className="active"><Link to="/" id="all">All</Link></li>
                                      <li><Link to="/" id="completed">Completed</Link></li>
                                      <li><Link to="/" id="pending">Pending</Link></li>
                                      <li><Link to="/" id="expired">Expired</Link></li>
                                    </ul>;

      this._addTodoButtonJSX = <ul className="nav navbar-nav">
                                <li><Link to="/add" id="add">{"+ add TODO"}</Link></li>
                              </ul>;
    }else if(this.props.todoFilter === "completed"){
      this._filterButtonJSX = <ul className="nav navbar-nav">
                                      <li><Link to="/" id="all">All</Link></li>
                                      <li className="active"><Link to="/" id="completed">Completed</Link></li>
                                      <li><Link to="/" id="pending">Pending</Link></li>
                                      <li><Link to="/" id="expired">Expired</Link></li>
                                    </ul>;

      this._addTodoButtonJSX = <ul className="nav navbar-nav">
                                <li><Link to="/add" id="add">{"+ add TODO"}</Link></li>
                              </ul>;
    }else if(this.props.todoFilter === "pending"){
      this._filterButtonJSX = <ul className="nav navbar-nav">
                                      <li><Link to="/" id="all">All</Link></li>
                                      <li><Link to="/" id="completed">Completed</Link></li>
                                      <li className="active"><Link to="/" id="pending">Pending</Link></li>
                                      <li><Link to="/" id="expired">Expired</Link></li>
                                    </ul>;

      this._addTodoButtonJSX = <ul className="nav navbar-nav">
                                <li><Link to="/add" id="add">{"+ add TODO"}</Link></li>
                              </ul>;
    }else if(this.props.todoFilter === "expired"){
      this._filterButtonJSX = <ul className="nav navbar-nav">
                                      <li><Link to="/" id="all">All</Link></li>
                                      <li><Link to="/" id="completed">Completed</Link></li>
                                      <li><Link to="/" id="pending">Pending</Link></li>
                                      <li className="active"><Link to="/" id="expired">Expired</Link></li>
                                    </ul>;

      this._addTodoButtonJSX = <ul className="nav navbar-nav">
                                <li><Link to="/add" id="add">{"+ add TODO"}</Link></li>
                              </ul>;
    }else if(this.props.todoFilter === "add"){
      this._filterButtonJSX = <ul className="nav navbar-nav">
                                      <li><Link to="/" id="all">All</Link></li>
                                      <li><Link to="/" id="completed">Completed</Link></li>
                                      <li><Link to="/" id="pending">Pending</Link></li>
                                      <li><Link to="/" id="expired">Expired</Link></li>
                                    </ul>;

      this._addTodoButtonJSX = <ul className="nav navbar-nav">
                                <li className="active" id="add"><Link to="/add">{"+ add TODO"}</Link></li>
                              </ul>;
    }

    this._componentLayoutJSX = <nav className="navbar navbar-default">
                                <div className="container">
                                  {this._filterButtonJSX}
                                  {this._addTodoButtonJSX}
                                  {this._infoButtonJSX}
                                </div>
                              </nav>;

    return(
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector("#all"), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          this.props.updateTodoFilter("all");
        }
      });

    Rx.Observable.fromEvent(document.querySelector("#completed"), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          this.props.updateTodoFilter("completed");
        }
      });

    Rx.Observable.fromEvent(document.querySelector("#pending"), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          this.props.updateTodoFilter("pending");
        }
      });

    Rx.Observable.fromEvent(document.querySelector("#expired"), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          this.props.updateTodoFilter("expired");
        }
      });

    Rx.Observable.fromEvent(document.querySelector("#add"), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          this.props.updateTodoFilter("add");
        }
      });

  }

}
