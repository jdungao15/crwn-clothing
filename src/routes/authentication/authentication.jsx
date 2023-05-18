import {
    auth,
    signInWithGooglePopUp,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,

} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import {AuthenticationContainer} from "./authentication.styles";

const Authentication = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <AuthenticationContainer>
            <SignInForm/>
            <SignUpForm/>
        </AuthenticationContainer>
    );
};

export default Authentication;