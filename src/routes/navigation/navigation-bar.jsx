import './navigation-bar.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from '../../components/cart-icon/cart-icon'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import {UserContext} from "../../contexts/user";
import {CartContext} from "../../contexts/cart";

const NavigationBar = () => {
   const {currentUser} = useContext(UserContext);
   const {isCartOpen} = useContext(CartContext);
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
                  )}
               <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown/>}
         </div>
         <Outlet/>
      </Fragment>
   );
};
export default NavigationBar;