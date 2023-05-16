import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import './navigation-bar.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {useContext} from "react";
import {UserContext} from "../../contexts/user";
import {signOutUser} from "../../utils/firebase/firebase.utils";

const NavigationBar = () => {
   const {currentUser} = useContext(UserContext);
   return (
      <Fragment>
         <div className="navigation">
            <Link className="logo-container" to="/">
               <CrwnLogo clasName="logo"/>
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to="/shop">
                  SHOP
               </Link>
               {
                  currentUser ? (
                     <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                  ) : (
                     <Link className="nav-link" to="/auth">
                        SIGN IN
                     </Link>
                  )
               }
            </div>

         </div>
         <Outlet/>
      </Fragment>
   );
};
export default NavigationBar;