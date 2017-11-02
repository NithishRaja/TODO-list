import React, {Component} from "react";
import Rx from "rxjs/Rx";

export default class Todo extends Component{

  constructor(props){
    super(props);

    this._dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    this._monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    this._date = new Date(this.props.todo.time.start);

    this._timeLeftMs = new Date(this.props.todo.time.start) - new Date(this.props.todo.time.end);

    this._timeLeftMs = this._timeLeftMs>0?this._timeLeftMs:(-this._timeLeftMs);

    this._timeLeftMin = Math.floor(this._timeLeftMs/60000);

    this._timeLeftHrs = Math.floor(this._timeLeftMin/60);

    this._timeLeftMin = this._timeLeftMin%60;

    this._timeLeftDays = Math.floor(this._timeLeftHrs/24);

    this._timeLeftHrs = this._timeLeftHrs%24;

    this._panelHeadingJSX = <div className="panel-heading">
                              <ul className="list-inline">
                                <li className="title col-md-4">{this.props.todo.title}</li>
                                <li className="col-md-offset-4">{`${this._dayList[this._date.getDay()]} ${this._date.getDate()} ${this._monthList[this._date.getMonth()]} ${this._date.getFullYear()}`}</li>
                              </ul>
                            </div>;

    this._panelBodyJSX = <div className="panel-body">
                          {this.props.todo.tags.map((tag, index) => <div className="label label-warning" key={index}>{tag}</div>)}
                          <p>{this.props.todo.desc}</p>
                        </div>;

    this._panelFooterJSX = <div className="panel-footer">
                            <div className="col-md-4"><strong>{`time left: ${this._timeLeftDays} days ${this._timeLeftHrs} hours ${this._timeLeftMin} minutes`}</strong></div>
                            <ul className="list-inline col-md-offset-9">
                              <li><button id={`complete-${this.props.todo.id}`} className="btn btn-success">{"completed"}</button></li>
                              <li><button id={`delete-${this.props.todo.id}`} className="btn btn-danger">{"delete"}</button></li>
                            </ul>
                          </div>;

    this._panelContainerJSX = <div className="panel panel-info col-md-offset-2">
                                {this._panelHeadingJSX}
                                {this._panelBodyJSX}
                                {this._panelFooterJSX}
                              </div>;

    this._componentLayoutJSX = this._panelContainerJSX;

  }

  componentWillMount(){

    // setting Todo theme depending upon status of Todo
    if(this.props.todo.status === "completed"){

      this._panelFooterJSX = <div className="panel-footer">
                              <ul className="list-inline col-md-offset-9">
                                <li><button id={`incomplete-${this.props.todo.id}`} className="btn btn-warning">{"incomplete"}</button></li>
                                <li><button id={`delete-${this.props.todo.id}`} className="btn btn-danger">{"delete"}</button></li>
                              </ul>
                            </div>;

      this._panelContainerJSX = <div className="panel panel-success col-md-offset-2">
                                  {this._panelHeadingJSX}
                                  {this._panelBodyJSX}
                                  {this._panelFooterJSX}
                                </div>;

      this._miniTodoJSX = <div className="alert alert-success col-md-offset-2"><strong>{this.props.todo.title}</strong></div>;

    }else if(this.props.todo.status === "pending" && new Date() - new Date(this.props.todo.time.end)>0){
      this._panelFooterJSX = <div className="panel-footer">
                              <div className="col-md-4"><strong>{`late by: ${this._timeLeftDays} days ${this._timeLeftHrs} hours ${this._timeLeftMin} minutes`}</strong></div>
                              <ul className="list-inline col-md-offset-9">
                                <li><button id={`complete-${this.props.todo.id}`} className="btn btn-success">{"completed"}</button></li>
                                <li><button id={`delete-${this.props.todo.id}`} className="btn btn-danger">{"delete"}</button></li>
                              </ul>
                            </div>;

      this._panelContainerJSX = <div className="panel panel-warning col-md-offset-2">
                                  {this._panelHeadingJSX}
                                  {this._panelBodyJSX}
                                  {this._panelFooterJSX}
                                </div>;

      this._miniTodoJSX = <div className="alert alert-warning col-md-offset-2"><strong>{this.props.todo.title}</strong></div>;

    }else if(this.props.todo.status === "pending" && new Date() - new Date(this.props.todo.time.end)<0){
      this._panelFooterJSX = <div className="panel-footer">
                              <div className="col-md-4"><strong>{`time left: ${this._timeLeftDays} days ${this._timeLeftHrs} hours ${this._timeLeftMin} minutes`}</strong></div>
                              <ul className="list-inline col-md-offset-9">
                                <li><button id={`complete-${this.props.todo.id}`} className="btn btn-success">{"completed"}</button></li>
                                <li><button id={`delete-${this.props.todo.id}`} className="btn btn-danger">{"delete"}</button></li>
                              </ul>
                            </div>;

      this._panelContainerJSX = <div className="panel panel-info col-md-offset-2">
                                  {this._panelHeadingJSX}
                                  {this._panelBodyJSX}
                                  {this._panelFooterJSX}
                                </div>;

      this._miniTodoJSX = <div className="alert alert-info col-md-offset-2"><strong>{this.props.todo.title}</strong></div>;
    }

  }

  render(){

    if(this.props.expand){
      this._componentLayoutJSX = this._panelContainerJSX;
    }else{
      this._componentLayoutJSX = this._miniTodoJSX;
    }

    return(
      this._componentLayoutJSX
    );

  }

  componentDidUpdate(){

    // adding event listeners depending upon the status of the Todo
    if(this.props.expand){
      // event listener for deleting Todo
      Rx.Observable.fromEvent(document.querySelector(`#delete-${this.props.todo.id}`), "click")
        .debounceTime(500)
        .subscribe({
          next: (event) => {
            this.props.deleteSelectedTodo(this.props.todo.id);
          }
        });

      if(this.props.todo.status!=="completed"){
        // event listener for marking todo as completed
        Rx.Observable.fromEvent(document.querySelector(`#complete-${this.props.todo.id}`), "click")
          .debounceTime(500)
          .subscribe({
            next: (event) => {
              this.props.startTodoStatusUpdate({ id:this.props.todo.id, status:"completed" });
            }
          });
      }else if(this.props.todo.status==="completed"){
        // event listener for marking todo as incomplete
        Rx.Observable.fromEvent(document.querySelector(`#incomplete-${this.props.todo.id}`), "click")
          .debounceTime(500)
          .subscribe({
            next: (event) => {
              this.props.startTodoStatusUpdate({ id:this.props.todo.id, status:"pending" });
            }
          });
      }
    }

  }

}
