import React, {Component} from "react";
import Rx from "rxjs/Rx";

export default class Todo extends Component{

  constructor(props){
    super(props);

    this._panelHeadingJSX = <div className="panel-heading">
                              {this.props.todo.title}
                            </div>;

    this._panelBodyJSX = <div className="panel-body">
                          {this.props.todo.tags.map((tag, index) => <div className="label label-warning" key={index}>{tag}</div>)}
                          <p>{this.props.todo.desc}</p>
                        </div>;

    this._panelFooterJSX = <div className="panel-footer">
                            <button id={`delete-${this.props.todo.id}`} className="btn btn-danger">{"delete"}</button>
                          </div>;

    this._panelContainerJSX = <div className="panel panel-info col-md-offset-2">
                                {this._panelHeadingJSX}
                                {this._panelBodyJSX}
                                {this._panelFooterJSX}
                              </div>;

    this._componentLayoutJSX = this._panelContainerJSX;
  }

  componentWillMount(){

    if(this.props.todo.status === "completed"){
      this._panelContainerJSX = <div className="panel panel-success col-md-offset-2">
                                  {this._panelHeadingJSX}
                                  {this._panelBodyJSX}
                                  {this._panelFooterJSX}
                                </div>;

      this._miniTodoJSX = <div className="alert alert-success col-md-offset-2">{this.props.todo.title}</div>;
    }else if(this.props.todo.status === "pending" && new Date() - new Date(this.props.todo.time.end)>0){
      this._panelContainerJSX = <div className="panel panel-warning col-md-offset-2">
                                  {this._panelHeadingJSX}
                                  {this._panelBodyJSX}
                                  {this._panelFooterJSX}
                                </div>;

      this._miniTodoJSX = <div className="alert alert-warning col-md-offset-2">{this.props.todo.title}</div>;
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

    if(this.props.expand){
      Rx.Observable.fromEvent(document.querySelector(`#delete-${this.props.todo.id}`), "click")
        .debounceTime(500)
        .subscribe({
          next: (event) => {
            console.log("delete");
            this.props.deleteSelectedTodo(this.props.todo.id);
          }
        });
    }

  }

}
