const initialState = {
    headAccess:"",
    popUp:""
  };
  
  export default (state = initialState, action)=>{
    switch (action.type) {
      case "headAccess":
        return {
          ...state,
          headAccess: action.payload
        };
      case "popUp":
        return {
          ...state,
          popUp: action.payload
        };
      default:
        return state;
    }
  };
  