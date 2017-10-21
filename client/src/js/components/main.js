import React, {Component} from "react";
import Todo from "./todo";

export default class Main extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div className="container">
                                <div className="alert alert-info">{"fetching TODO, please wait..."}</div>
                              </div>;
  }

  componentWillMount(){
    if(this.props.todo===null){
      this.props.startTodoUpdate();
    }
  }

  render(){

    if(this.props.todoFilter!=="all" && this.props.todo!==null){
      this._componentLayoutJSX = <div className="container">
                                  {this.props.todo.filter(todo => {
                                    return this.props.todoFilter === todo.status;
                                  }).map((todo) => <Todo key={todo.id} todo={todo} />)}
                                </div>;
    }else if(this.props.todo!==null){
      this._componentLayoutJSX = <div className="container">
                                  {this.props.todo.map((todo) => <Todo key={todo.id} todo={todo} />)}
                                </div>;
    }

    return(
      this._componentLayoutJSX
    );
  }

}
