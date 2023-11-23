import { REDUCER_TYPES } from "../../common/constant";

export type stateProps = {
  userData?: any;
  accessToken?: any;
};
const initialState: stateProps = {
  userData: null,
  accessToken: null,
 
};


const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REDUCER_TYPES.LOGIN:
      return {...state, userData: action.data};
    case REDUCER_TYPES.TOKEN:
      return {...state, accessToken: action.data};
   
    default:
      return state;
  }
};

export default UserReducer;
