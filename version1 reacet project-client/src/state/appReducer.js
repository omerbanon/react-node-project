var initialState = {
name:''
};

/*
function userReducer(state,action)
{
  if(state==='undefined')
  {
      state = {
          name: "", age: ''
      };
  }
}
*/
//when state is undefined it wil get default param initialState

const appReducer = (state = initialState, action) => { 
  debugger
  switch (action.type) {
      case 'CHANGE': 
    debugger;
     let AllFlightsToState=[]
          let newObj = {}; 
          newObj = action.data.allflights; 
          let newState = Object.assign({}, state, newObj) ; 

          return newState; 
      default:

          return state;
  }
};
export default appReducer;