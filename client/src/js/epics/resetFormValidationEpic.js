import 'rxjs/add/operator/debounceTime';

export default function(action$){

  return action$.ofType("INVALID_FORM_FIELD")
    .debounceTime(3000)
    .map(action => {
      return {type:"RESET_FORM_VALIDATION", payload:null};
    });
}
