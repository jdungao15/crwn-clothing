import {
   auth,
   signInWithGooglePopUp,
   createUserDocumentFromAuth,
   signInWithGoogleRedirect,

} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import './authentication.scss'

const Authentication = () => {
   const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopUp();
      const userDocRef = await createUserDocumentFromAuth(user);
   };

   return (
      <div className='authentication-container'>
         <SignInForm />
         <SignUpForm />

      </div>
   );
};

export default Authentication;