import React, {Component} from "react";
import Todo from "./todo";

export default class Main extends Component{

  constructor(props){
    super(props);

    this._todoList = [
      {
        "id": 1,
        "title":"todo1",
        "desc":"do this",
        "tags":["important", "do not forget"],
        "time":{
          "start": "Fri Oct 20 2017 17:58:40 GMT+0530 (India Standard Time)",
          "end": "Sat Oct 21 2017 17:58:40 GMT+0530 (India Standard Time)",
          "status": "time remaining"
        },
        "status": "pending"
      },
      {
        "id": 2,
        "title":"todo2",
        "desc":"and do this",
        "tags":["not important", "do not forget"],
        "time":{
          "start": "Fri Oct 13 2017 17:58:40 GMT+0530 (India Standard Time)",
          "end": "Sat Oct 14 2017 17:58:40 GMT+0530 (India Standard Time)",
          "status": "expired"
        },
        "status": "pending"
      },
      {
        "id": 3,
        "title":"todo3",
        "desc":"finally do this",
        "tags":["important"],
        "time":{
          "start": "Fri Oct 6 2017 17:58:40 GMT+0530 (India Standard Time)",
          "end": "Sat Oct 7 2017 17:58:40 GMT+0530 (India Standard Time)",
          "status": "expired"
        },
        "status": "completed"
      }
    ];

    this._componentLayoutJSX = <div className="container-fluid">
                                <div className="container">
                                  {this._todoList.map((todo) => <Todo key={todo.id} todo={todo} />)}
                                </div>
                              </div>;
  }

  render(){

    this._componentLayoutJSX = <div className="container-fluid">
                                <div className="container">
                                  {this._todoList.filter(todo => {
                                    if(this.props.todoFilter!=="all"){
                                      return this.props.todoFilter === todo.status;
                                    }else{
                                      return true;
                                    }
                                  }).map((todo) => <Todo key={todo.id} todo={todo} />)}
                                </div>
                              </div>;

    return(
      this._componentLayoutJSX
    );
  }

}
