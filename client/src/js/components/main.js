import React, {Component} from "react";
import Rx from "rxjs/Rx";
import Todo from "./todo";
import Navbar from "./../containers/navbarContainer";

export default class Main extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div>
                                <Navbar />
                                <div className="container">
                                  <div className="alert alert-info">{"fetching TODO, please wait..."}</div>
                                </div>
                              </div>;
  }

  componentWillMount(){
    if(this.props.todo===null){
      this.props.startTodoUpdate();
    }
  }

  render(){

    if(this.props.todoFilter==="pending" && this.props.todo!==null){
      this._todoListJSX = this.props.todo.filter(todo => {
                            return new Date() - new Date(todo.time.end) < 0;
                          })
                          .map((todo) => <div key={todo.id}><button id={`toggle-${todo.id}`} className="btn btn-primary col-md-1">{">"}</button>
                            <Todo deleteSelectedTodo={this.props.deleteSelectedTodo}
                            updateTodoFilter={this.props.updateTodoFilter} todo={todo} /></div>);

    }else if(this.props.todoFilter==="completed" && this.props.todo!==null){
      this._todoListJSX = this.props.todo.filter(todo => {
                                  return todo.status === "completed";
                                })
                                .map((todo) => <div key={todo.id}><button id={`toggle-${todo.id}`} className="btn btn-primary col-md-1">{">"}</button>
                                  <Todo deleteSelectedTodo={this.props.deleteSelectedTodo}
                                  updateTodoFilter={this.props.updateTodoFilter} todo={todo} /></div>);
    }else if(this.props.todoFilter==="expired" && this.props.todo!=null){
      this._todoListJSX = this.props.todo.filter(todo => {
                                  return new Date() - new Date(todo.time.end) > 0 && todo.status==="pending";
                                })
                                .map((todo) => <div key={todo.id}><button id={`toggle-${todo.id}`} className="btn btn-primary col-md-1">{">"}</button>
                                  <Todo deleteSelectedTodo={this.props.deleteSelectedTodo}
                                  updateTodoFilter={this.props.updateTodoFilter} todo={todo} /></div>);
    }else if(this.props.todoFilter==="all" && this.props.todo!==null){
      this._todoListJSX = this.props.todo.map((todo) => <div key={todo.id}><button id={`toggle-${todo.id}`} className="btn btn-primary col-md-1">{">"}</button>
                                            <Todo deleteSelectedTodo={this.props.deleteSelectedTodo}
                                            updateTodoFilter={this.props.updateTodoFilter} todo={todo} /></div>);
    }
    if(this._todoListJSX){
      this._componentLayoutJSX = <div>
                                  <Navbar />
                                  <div className="container">
                                    {this._todoListJSX}
                                  </div>
                                </div>;
    }

    return(
      this._componentLayoutJSX
    );
  }

  componentDidUpdate(){

    this.props.todo.forEach(todo => {
      Rx.Observable.fromEvent(document.querySelector(`#toggle-${todo.id}`), "click")
        .subscribe({
          next: (event) => {
            console.log(todo);
          }
        });
    });

  }

}
