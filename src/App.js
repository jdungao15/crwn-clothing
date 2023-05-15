import Home from "./routes/home/home";
import {Routes, Route} from "react-router-dom";
import NavigationBar from "./routes/navigation/navigation-bar";
import Authentication from "./routes/authentication/authentication";

const App = () => {
   const Shop = () => {
      return (
         <h1>Shop</h1>
         
      )
   }

   return (
      <Routes>
         <Route path="/" element={<NavigationBar/>} >
            <Route index element={<Home/>} />
            <Route path="shop" element={<Shop/>} />
            <Route path="auth" element={<Authentication/>} />
         </Route>
      </Routes>
   )
};

export default App;
