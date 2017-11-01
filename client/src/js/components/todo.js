import React, {Component} from "react";
import Rx from "rxjs/Rx";

export default class Todo extends Component{

  constructor(props){
    super(props);

    this._panelHeadingJSX = <div className="panel-heading">
                              <strong>{this.props.todo.title}</strong>
                              <div className="date">{new Date(this.props.todo.time.start).toString()}</div>
                            </div>;

    this._panelBodyJSX = <div className="panel-body">
                          {this.props.todo.tags.map((tag, index) => <div className="label label-warning" key={index}>{tag}</div>)}
                          <p>{this.props.todo.desc}</p>
                        </div>;

    this._panelFooterJSX = <div className="panel-footer">
                            <ul className="list-inline">
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

    // setting Todo theme depending uponstatus of Todo
    if(this.props.todo.status === "completed"){

      this._panelFooterJSX = <div className="panel-footer">
                              <ul className="list-inline">
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
      this._panelContainerJSX = <div className="panel panel-warning col-md-offset-2">
                                  {this._panelHeadingJSX}
                                  {this._panelBodyJSX}
                                  {this._panelFooterJSX}
                                </div>;

      this._miniTodoJSX = <div className="alert alert-warning col-md-offset-2"><strong>{this.props.todo.title}</strong></div>;

    }else if(this.props.todo.status === "pending" && new Date() - new Date(this.props.todo.time.end)<0){
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
