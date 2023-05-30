import { useEffect, useMemo, useState } from "react";
import { Repository } from "@/components/Repository";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, isLoggingIn } from "../firebase"
import { useAuthValue } from "@/providers/AuthContext";

export const Top: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = useAuthValue();
  
  
  const handleLogout = () => {               
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully")
    }).catch((error) => {
        // An error happened.
        console.log(error.errorCode, error.errorMessage)
    });
  }

  // for debugging
  console.log(currentUser)
  console.log(isLoggingIn() ? "true" : "false")

  if (currentUser !== null && currentUser.emailVerified) {
      return (
        <div>
          <h1>トップページ</h1>
          <h4>You are logging in as {currentUser?.email}</h4>

            <button
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </button>
        </div>
      );
  }else{
    const [redirectMessage, setredirectMessage] = useState("");
    

    //  1.useEffect is called after rendering
    //  2. setTimeout is called after 2 second
    //  3. a user is redirected to the login page
    useEffect(() => {

      // if a user is logged in but not verified, redirect to the login page
      if (currentUser!==null && !currentUser?.emailVerified){
        setredirectMessage("Please verify your email: " + currentUser?.email)
      }else{
        setredirectMessage("You don't login to your account, So, Redirecting to Login Page...")
      }
      
      // redirect to the login page
      setTimeout(() => {
        navigate("/login", {replace: true});
      }, 2000);
    }, []);
    
    return <div>{redirectMessage}</div>;
  };
}