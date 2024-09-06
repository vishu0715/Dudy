import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
   const [loading, setLoading] = useState(false);
   const {setAuthUser} = useAuthContext();
   const signup = async ({ name, username, password, confirmPassword, gender }) => {
      const success = handleInputErrors({ name, username, password, confirmPassword, gender });
      if (!success) return;

      setLoading(true); // Set loading to true before starting the request

      try {
         const res = await fetch('/api/auth/signup', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, username, password, confirmPassword, gender }), // Removed confirmPassword from the body if not needed by the backend
         });
         const data = await res.json();
         if(data.error){
            throw new Error(data.error);
         }
         //we will store user details in local storage
         localStorage.setItem("dudy-user", JSON.stringify(data));
         //using context api we can use the user details to login in
         setAuthUser(data);
         console.log(data);
         toast.success("Sign up successful");
      } catch (error) {
         toast.error(error.message);
      } finally {
         setLoading(false); // Set loading to false after the request
      }
   };

   return { loading, signup };
};

export default useSignup;

function handleInputErrors({ name, username, password, confirmPassword, gender }) {
   if (!name || !username || !password || !confirmPassword || !gender) {
      toast.error('Please fill in all fields');
      return false;
   }

   if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return false;
   }

   if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return false;
   }

   return true;
}
