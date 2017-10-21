import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class Add extends Component{

  constructor(props){
    super(props);

    this._formJSX = <div  className="container">
                      <div className="form-group">
                        <label htmlFor="title">title</label>
                        <input id="title" className="form-control" placeholder="title" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="desc">description</label>
                        <input id="desc" className="form-control" placeholder="description" />
                      </div>
                      <Link to="/" id="submit" className="btn btn-success">add todo</Link>
                      <Link to="/" id="cancel" className="btn btn-danger">cancel</Link>
                    </div>;

    this._componentLayoutJSX = this._formJSX;
  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector("#submit"))
      .subscribe({
        next: (event) => {
          console.log("send AJAX POST request");
        }
      });

  }

}
