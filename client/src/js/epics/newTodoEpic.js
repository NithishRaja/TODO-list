import Rx from "rxjs/Rx";

export default function(action$){

  return action$.ofType("ADD_NEW_TODO")
    .debounceTime(500)
    .map(action => {
      console.log(action);
      // AJAX call comes here
      // return {type:"UPDATE_TODO", payload:response} with response from AJAX call
      return {type:"", payload:""};
    });
}
