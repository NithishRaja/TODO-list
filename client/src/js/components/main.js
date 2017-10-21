import React, {Component} from "react";
import Todo from "./todo";

export default class Main extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div className="container-fluid">
                                <div className="container">
                                  {this.props.todo.map((todo) => <Todo key={todo.id} todo={todo} />)}
                                </div>
                              </div>;
  }

  render(){

    this._componentLayoutJSX = <div className="container">
                                {this.props.todo.filter(todo => {
                                  if(this.props.todoFilter!=="all"){
                                    return this.props.todoFilter === todo.status;
                                  }else{
                                    return true;
                                  }
                                }).map((todo) => <Todo key={todo.id} todo={todo} />)}
                              </div>;

    return(
      this._componentLayoutJSX
    );
  }

}
