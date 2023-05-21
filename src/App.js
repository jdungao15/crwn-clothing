import Home from "./routes/home/home";
import {Routes, Route} from "react-router-dom";
import NavigationBar from "./routes/navigation/navigation-bar";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";
import {useEffect} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "./utils/firebase/firebase.utils";
import {setCurrentUser} from "./store/user/user.action";
import {useDispatch} from "react-redux";

const App = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
         if (user) {
            createUserDocumentFromAuth(user);
         }
         dispatch(setCurrentUser(user))
      });

      return unsubscribe; //will stop listening when component unmount.
   }, [dispatch]);
    return (
        <Routes>
            <Route path="/" element={<NavigationBar/>}>
                <Route index element={<Home/>}/>
                <Route path="shop/*" element={<Shop/>}/>
                <Route path="auth" element={<Authentication/>}/>
                <Route path='checkout' element={<Checkout/>}/>
            </Route>
        </Routes>
    )
};

export default App;
