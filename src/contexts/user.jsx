import {createContext, useEffect, useReducer} from "react";
import {
   createUserDocumentFromAuth,
   onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
import {createAction} from "../utils/reducer/reducer.utils";


// as the actual value you want to access
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
});





export const UserProvider = ({children}) => {
   // const [currentUser, setCurrentUser] = useState(null);
   // const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
   //



   // const value = {currentUser, setCurrentUser};


   // return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

