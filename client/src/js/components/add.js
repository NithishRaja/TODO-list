import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";
import Navbar from "./../containers/navbarContainer";

export default class Add extends Component{

  constructor(props){
    super(props);

    this._tagList = null;

    this._titleInputJSX = <div className="form-group">
                            <label htmlFor="title">title</label>
                            <input type="text" id="title" className="form-control" placeholder="title" />
                          </div>;

    this._descInputJSX = <div className="form-group">
                          <label htmlFor="desc">description</label>
                          <input type="text" id="desc" className="form-control" placeholder="description" />
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

    this._componentLayoutJSX = <div>
                                <Navbar />
                                {this._formJSX}
                              </div>;
  }

  render(){

    if(this._tagList===null && this.props.tagListModifier.type==="PUSH"){
      this._tagList = this.props.tagListModifier.payload;
    }else if(this.props.tagListModifier.type==="PUSH"){
      this._tagList.push(this.props.tagListModifier.payload);
    }else if(this.props.tagListModifier.type==="POP"){
      this._tagList = this._tagList.filter(tag => this.props.tagListModifier.payload!==tag);
    }

    this._tagsInputJSX = <div className="form-group">
                          <label htmlFor="tags">tags</label>
                          <div className="form-inline">
                            {this._tagList.map((tag, index) => <div className="label label-warning" key={index}>
                              {tag}<button className="btn btn-danger" id={`cancel-${tag}-${index}`}>x</button></div>)}
                            <input type="text" id="tags" className="form-control"/>
                            <button id="add-tag-button" className="btn btn-success">add tag</button>
                          </div>
                        </div>;

    this._formJSX = <div className="container">
                      {this._titleInputJSX}
                      {this._descInputJSX}
                      {this._dateandtimeInputJSX}
                      {this._tagsInputJSX}
                      {this._submitButtonJSX}
                    </div>;

    this._componentLayoutJSX = <div>
                                <Navbar />
                                {this._formJSX}
                              </div>;

    return(
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector("#submit"), "click")
      .debounceTime(500)
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
            status: "pending",
            tags: this._tagList
          };
          this.props.addNewTodo(todo);
          this.props.refreshTagListModifier();
          this.props.updateTodoFilter("all");
        }
      });

    Rx.Observable.fromEvent(document.querySelector("#cancel"), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          this.props.refreshTagListModifier();
          this.props.updateTodoFilter("all");
        }
      });

    Rx.Observable.fromEvent(document.querySelector("#add-tag-button"), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          event.preventDefault();
          if(document.querySelector("#tags").value!==""){
            this.props.updateTagListModifier({type:"PUSH", payload:document.querySelector("#tags").value});
            document.querySelector("#tags").value = "";
          }
        }
      });

  }

  componentDidUpdate(){

    this._tagList.forEach((tag, index) => {
      Rx.Observable.fromEvent(document.querySelector(`#cancel-${tag}-${index}`), "click")
        .debounceTime(500)
        .subscribe({
          next: (event) => {
            event.preventDefault();
            this.props.updateTagListModifier({type:"POP", payload:tag});
          }
        });
    });

  }

}
