import React, {Component} from "react";

export default class Todo extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div className="panel panel-default">
                                <div className="panel-heading">
                                {this.props.todo.title}<button className="btn btn-primary">expand/contract</button>
                                </div>
                                <div className="panel-body">
                                  {this.props.todo.tags.map((tag, index) => <div className="label label-warning" key={index}>{tag}</div>)}
                                  <p>{this.props.todo.desc}</p>
                                </div>
                                <div className="panel-footer">
                                  <button className="btn btn-success">{"edit"}</button>
                                  <button className="btn btn-danger">{"delete"}</button>
                                </div>
                              </div>;

  }

  render(){

    return(
      this._componentLayoutJSX
    );

  }

}
