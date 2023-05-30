import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthValue } from "@/providers/AuthContext";
export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // create new user
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(
        auth, email, password
    ).then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user).then(() => {
          alert(
            "Please verify your email: " + user.email
          );

          navigate("/login");
          console.log(user);
        }).catch((error) => {
          alert(error.code + ": " + error.message)
        });
        
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        
        console.log((errorMessage.toString().match(/\((.*?)\)/g), "/"))
        console.log((errorMessage.toString()))
        console.log(errorMessage.includes("invalid-email"))
        alert(errorMessage.toString())
    });
    
  };




  // login as existing user
  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(
        auth, email, password
    ).then(() => {
        navigate("/");
        console.log("Log in successfully!")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
  }

  return (
    <div>
      <h1>Login Page</h1>

      <hr/>
      <div>
        <h3>Create your account by inputting your email and password!</h3>
        <label htmlFor="email">email: </label>
        <input name="email" type="email" required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">password: </label>
        <input name="password" type="password" required onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
      </div>
      <button
        onClick={(e) => {login(e)}}
      >
        Login
      </button>
      <button type="button" onClick={(e) =>{onSubmit(e)}}>Create new account</button>
      <hr />
      
    </div>
  );
}