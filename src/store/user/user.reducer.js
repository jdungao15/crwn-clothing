import CATEGORIES_ACTION_TYPES from "../categories/categories.types";




const INITIAL_STATE = {
   currentUser: null,
};


export const userReducer = (state = INITIAL_STATE, action) => {
   const {type, payload} = action;
   switch (type) {
      case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
         return {
            ...state,
            currentUser: payload,
         };
      default:
         return state;
   }
};