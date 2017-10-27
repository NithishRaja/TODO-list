
export default function(action$){

  return action$.ofType("UPDATE_TAG_LIST_MODIFIER")
    .map(action => {
      return {type:"RESET_TAG_LIST_MODIFIER", payload:null};
    });
}
