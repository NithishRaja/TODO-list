import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";

export default class Add extends Component{

  constructor(props){
    super(props);

    this._titleInputJSX = <div className="form-group">
                            <label htmlFor="title">title</label>
                            <input id="title" className="form-control" placeholder="title" />
                          </div>;

    this._descInputJSX = <div className="form-group">
                          <label htmlFor="desc">description</label>
                          <input id="desc" className="form-control" placeholder="description" />
                        </div>;

    this._dateandtimeInputJSX = <div className="form-inline">
                                  <div className="form-group">
                                    <label htmlFor="date">end date</label>
                                    <input className="form-control" type="date" id="date"/>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="time">end time</label>
                                    <input className="form-control" type="time" id="time"/>
                                  </div>
                                </div>;

    this._submitButtonJSX = <div className="form-group">
                              <Link to="/" id="submit" className="btn btn-success">add todo</Link>
                              <Link to="/" id="cancel" className="btn btn-danger">cancel</Link>
                            </div>;

    this._formJSX = <div className="container">
                      {this._titleInputJSX}
                      {this._descInputJSX}
                      {this._dateandtimeInputJSX}
                      {this._submitButtonJSX}
                    </div>;

    this._componentLayoutJSX = this._formJSX;
  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector("#submit"), "click")
      .subscribe({
        next: (event) => {
          var time = {
            start: new Date(),
            end: new Date(document.querySelector("#date").value+" "+document.querySelector("#time").value)
          };
          var todo = {
            title: document.querySelector("#title").value,
            desc: document.querySelector("#desc").value,
            time,
            status: "pending"
          };
        }
      });

  }

}
