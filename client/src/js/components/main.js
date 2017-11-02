import React, {Component} from "react";
import Rx from "rxjs/Rx";
import Todo from "./todo";
import Navbar from "./../containers/navbarContainer";

export default class Main extends Component{

  constructor(props){
    super(props);

    this._previousActiveTodo = null;

    this._noTodoAlertJSX = <div className="alert alert-info" role="alert">{"no Todo to display. Add a Todo to get started"}</div>;

    this._componentLayoutJSX = <div>
                                <Navbar />
                                <div className="container">
                                  <div className="alert alert-info">{"fetching TODO, please wait..."}</div>
                                </div>
                              </div>;
  }

  componentWillMount(){
    // get Todo if no Todo is present
    if(this.props.todo===null){
      this.props.startTodoUpdate();
    }
  }

  render(){

    // display Todo depending on the filter
    if(this.props.todoFilter==="pending" && this.props.todo!==null){
      this._todoListJSX = this.props.todo.filter(todo => {
                            return new Date() - new Date(todo.time.end) < 0;
                          })
                          .map((todo) => <div key={todo.id}><button id={`toggle-${todo.id}`} className="btn btn-primary col-md-1">{this.props.activeTodo===todo.id?<span className="badge">^</span>:<span className="badge">></span>}</button>
                            <Todo expand={this.props.activeTodo===todo.id} startTodoStatusUpdate={this.props.startTodoStatusUpdate}
                             deleteSelectedTodo={this.props.deleteSelectedTodo}
                             updateTodoFilter={this.props.updateTodoFilter} todo={todo} /></div>);

    }else if(this.props.todoFilter==="completed" && this.props.todo!==null){
      this._todoListJSX = this.props.todo.filter(todo => {
                                  return todo.status === "completed";
                                })
                                .map((todo) => <div key={todo.id}><button id={`toggle-${todo.id}`} className="btn btn-primary col-md-1">{this.props.activeTodo===todo.id?<span className="badge">^</span>:<span className="badge">></span>}</button>
                                  <Todo expand={this.props.activeTodo===todo.id} startTodoStatusUpdate={this.props.startTodoStatusUpdate}
                                   deleteSelectedTodo={this.props.deleteSelectedTodo}
                                   updateTodoFilter={this.props.updateTodoFilter} todo={todo} /></div>);
    }else if(this.props.todoFilter==="expired" && this.props.todo!=null){
      this._todoListJSX = this.props.todo.filter(todo => {
                                  return new Date() - new Date(todo.time.end) > 0 && todo.status==="pending";
                                })
                                .map((todo) => <div key={todo.id}><button id={`toggle-${todo.id}`} className="btn btn-primary col-md-1">{this.props.activeTodo===todo.id?<span className="badge">^</span>:<span className="badge">></span>}</button>
                                  <Todo expand={this.props.activeTodo===todo.id} startTodoStatusUpdate={this.props.startTodoStatusUpdate}
                                   deleteSelectedTodo={this.props.deleteSelectedTodo}
                                   updateTodoFilter={this.props.updateTodoFilter} todo={todo} /></div>);
    }else if(this.props.todoFilter==="all" && this.props.todo!==null){
      this._todoListJSX = this.props.todo.map((todo) => <div key={todo.id}><button id={`toggle-${todo.id}`} className="btn btn-primary col-md-1">{this.props.activeTodo===todo.id?<span className="badge">^</span>:<span className="badge">></span>}</button>
                                            <Todo expand={this.props.activeTodo===todo.id} startTodoStatusUpdate={this.props.startTodoStatusUpdate}
                                             deleteSelectedTodo={this.props.deleteSelectedTodo}
                                             updateTodoFilter={this.props.updateTodoFilter} todo={todo} /></div>);
    }
    if(this._todoListJSX && this.props.todo.length!==0){
      this._componentLayoutJSX = <div>
                                  <Navbar />
                                  <div className="container">
                                    {this._todoListJSX}
                                  </div>
                                </div>;
    }else if(this._todoListJSX && this.props.todo.length===0){
      this._componentLayoutJSX = <div>
                                  <Navbar />
                                  <div className="container">
                                    {this._noTodoAlertJSX}
                                  </div>
                                </div>;
    }

    return(
      this._componentLayoutJSX
    );
  }

  componentDidUpdate(){

    // filter currrently displayed Todo to add event listeners
    this.props.todo.filter((todo) => {
      if(this.props.todoFilter==="pending"){
        return new Date() - new Date(todo.time.end) < 0;
      }else if(this.props.todoFilter==="expired"){
        return new Date() - new Date(todo.time.end) > 0 && todo.status==="pending";
      }else if(this.props.todoFilter==="completed"){
        return todo.status === "completed";
      }else{
        return true;
      }
    })
    .forEach(todo => {
      // event listener to expand Todo
      Rx.Observable.fromEvent(document.querySelector(`#toggle-${todo.id}`), "click")
        .subscribe({
          next: (event) => {
            this._previousActiveTodo = todo.id;
            this.props.updateActiveTodo(todo.id);
          }
        });
    });

  }

}
