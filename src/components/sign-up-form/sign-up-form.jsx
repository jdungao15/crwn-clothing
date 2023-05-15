import {useState} from 'react';
import {
   createAuthUserWithEmailAndPassword,
   createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form.input";
import {Form} from "react-router-dom";

const defaultFormFields = {
   displayName: '',
   email: '',
   password: '',
   confirmPassword: ''
};

const SignUpForm = () => {
   const [formFields, setFormFields] = useState(defaultFormFields);
   const {displayName, email, password, confirmPassword} = formFields;


   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   };

   const handleChange = (event) => {
      const {name, value} = event.target;
      setFormFields({...formFields, [name]: value});
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      if (password !== confirmPassword) {
         alert("Password do not match.");
      }
      try {
         const {user} = await createAuthUserWithEmailAndPassword(email, password);
         await createUserDocumentFromAuth(user, {displayName});
         resetFormFields();

      } catch (err) {
         if (err.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
         }
         console.log(err);
      }

   };
   return (
      <div>
         <h1>Sign up with your email and password</h1>
         <form onSubmit={handleSubmit}>
            <FormInput
               label="Display Name"
               type="text"
               required
               onChange={handleChange}
               name="displayName"
               value={displayName}
            />

            <FormInput
               label="email"
               type="email"
               required
               onChange={handleChange}
               value={email}
               name="email"
            />


            <FormInput
               label="Password"
               type="password"
               required onChange={handleChange}
               value={password}
               name="password"/>

            <FormInput
               label="Confirm Password"
               type="password"
               required onChange={handleChange}
               value={confirmPassword}
               name="confirmPassword"/>
            <button type="submit"> Sign Up</button>
         </form>
      </div>
   );
};

export default SignUpForm;