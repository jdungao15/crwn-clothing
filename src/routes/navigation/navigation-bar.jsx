import './navigation.styles';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";

import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from '../../components/cart-icon/cart-icon'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import {UserContext} from "../../contexts/user";
import {CartContext} from "../../contexts/cart";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";

const NavigationBar = () => {
   const {isCartOpen} = useContext(CartContext);
   const currentUser = useSelector(selectCurrentUser);
   return (
      <Fragment>
         <NavigationContainer>
            <LogoContainer to="/">
               <CrwnLogo clasName="logo"/>
            </LogoContainer>
            <NavLinks>
               <NavLink to='/shop'>
                  SHOP
               </NavLink>
               {
                  currentUser ? (
                     <NavLink as='span' className="nav-link" onClick={signOutUser}>SIGN OUT</NavLink>
                  ) : (
                     <NavLink to="/auth">
                        SIGN IN
                     </NavLink>
                  )}
               <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown/>}
         </NavigationContainer>
         <Outlet/>
      </Fragment>
   );
};
export default NavigationBar;