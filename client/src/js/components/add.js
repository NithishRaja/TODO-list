import React, {Component} from "react";
import {Link} from "react-router-dom";
import Rx from "rxjs/Rx";
import Navbar from "./../containers/navbarContainer";

export default class Add extends Component{

  constructor(props){
    super(props);

    this._tagList = null;

    this._endTimeErrorAlertJSX = <div className="alert alert-danger" role="alert">{"end time and date should be after current time and date"}</div>;

    this._emptyFieldsAlertJSX = <div className="alert alert-warning" role="alert">{"please fill all fields before submitting"}</div>;

    this._noTagAlertJSX = <div className="alert alert-warning" role="alert">{"please include atleast one tag before submittong"}</div>;

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

    this._submitButtonJSX = <div className="container">
                              <Link to="/" id="submit" className="btn btn-success">add todo</Link>
                              <Link to="/" id="cancel" className="btn btn-danger">cancel</Link>
                            </div>;

    this._formJSX = <div className="container">
                      {this._titleInputJSX}
                      {this._descInputJSX}
                      {this._dateandtimeInputJSX}
                    </div>;

    this._componentLayoutJSX = <div>
                                <Navbar />
                                {this._formJSX}
                                {this._submitButtonJSX}
                              </div>;
  }

  render(){

    // update tagList to contain current tags
    if(this._tagList===null && this.props.tagListModifier.type==="NONE"){
      this._tagList = this.props.tagListModifier.payload;
    }else if(this.props.tagListModifier.type==="PUSH"){
      this._tagList.push(this.props.tagListModifier.payload);
    }else if(this.props.tagListModifier.type==="POP"){
      this._tagList = this._tagList.filter(tag => this.props.tagListModifier.payload!==tag);
    }

    // update markup to display current tags
    this._tagsInputJSX = <div className="form-group">
                          <label htmlFor="tags">tags</label>
                          <div className="form-inline">
                            <ul className="list-inline">
                            {this._tagList.map((tag, index) => <li className="list-group-item list-group-item-warning" key={index}>
                              {tag}
                              <button className="badge btn btn-danger" id={`cancel-${tag}-${index}`}>x</button></li>)}
                            </ul>
                            <input type="text" id="tags" className="form-control"/>
                            <button id="add-tag-button" className="btn btn-success">add tag</button>
                          </div>
                        </div>;

    // update form to include tagList
    this._formJSX = <div className="container">
                      {this._titleInputJSX}
                      {this._descInputJSX}
                      {this._dateandtimeInputJSX}
                      {this._tagsInputJSX}
                    </div>;

    // show appropriate form alert
    if(this.props.formValidation === "EMPTY_FIELDS"){
      this._componentLayoutJSX = <div>
                                  <Navbar />
                                  {this._formJSX}
                                  <div className="container">
                                  {this._emptyFieldsAlertJSX}
                                  </div>
                                  {this._submitButtonJSX}
                                </div>;
    }else if(this.props.formValidation === "INVALID_DATE"){
      this._componentLayoutJSX = <div>
                                  <Navbar />
                                  {this._formJSX}
                                  <div className="container">
                                  {this._endTimeErrorAlertJSX}
                                  </div>
                                  {this._submitButtonJSX}
                                </div>;
    }else if(this.props.formValidation === "NO_TAGS"){
      this._componentLayoutJSX = <div>
                                  <Navbar />
                                  {this._formJSX}
                                  <div className="container">
                                  {this._noTagAlertJSX}
                                  </div>
                                  {this._submitButtonJSX}
                                </div>;
    }else{
      this._componentLayoutJSX = <div>
                                  <Navbar />
                                  {this._formJSX}
                                  {this._submitButtonJSX}
                                </div>;
    }

    return(
      this._componentLayoutJSX
    );

  }

  componentDidMount(){

    // event listener to listen to form submit
    Rx.Observable.fromEvent(document.querySelector("#submit"), "click")
      .subscribe({
        next: (event) => {
          this._time = {
            start: new Date(),
            end: new Date(document.querySelector("#date").value+" "+document.querySelector("#time").value)
          };
          this._todo = {
            title: document.querySelector("#title").value,
            desc: document.querySelector("#desc").value,
            time: this._time,
            status: "pending",
            tags: this._tagList
          };
          // deciding to alert user if input does not satisfy conditions or submit if conditions are satisfied
          if(this._todo.title===""||this._todo.desc===""){
            event.preventDefault();
            this.props.updateFormValidation("EMPTY_FIELDS");
          }else if(this._todo.tags.length===0 && this._todo.tags){
            event.preventDefault();
            this.props.updateFormValidation("NO_TAGS");
          }else if(this._time.start-this._time.end>=0 || isNaN(this._time.start-this._time.end)){
            event.preventDefault();
            this.props.updateFormValidation("INVALID_DATE");
          }else{
            this.props.addNewTodo(this._todo);
            this.props.resetTagListModifier();
            this.props.updateTodoFilter("all");
          }
        }
      });

    // event listener to listen to cancel
    Rx.Observable.fromEvent(document.querySelector("#cancel"), "click")
      .subscribe({
        next: (event) => {
          this.props.resetTagListModifier();
          this.props.updateTodoFilter("all");
        }
      });

    // event listener to add tags
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

    Rx.Observable.fromEvent(document.querySelector("#tags"), "keydown")
      .subscribe({
        next: (event) => {
          if(!RegExp(/^[a-zA-Z0-9-]*$/).test(event.key)){
            event.preventDefault();
          }
        }
      });

  }

  componentDidUpdate(){

    this._tagList.forEach((tag, index) => {
      // event listener to remove tags
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
