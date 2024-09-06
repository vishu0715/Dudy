import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
   const [loading, setLoading] = useState(false);
   const { setAuthUser } = useAuthContext();

   const logout = async () => {
      setLoading(true);
      try {
         const res = await fetch("/api/auth/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" }
         });

         // Check if the response is not okay (e.g., 4xx or 5xx status code)
         if (!res.ok) {
            const errorData = await res.json(); // Parse the error message
            throw new Error(errorData.error || "Failed to logout");
         }

         // If the response is okay, handle successful logout
         localStorage.removeItem("dudy-user"); // Clear user data from localStorage
         setAuthUser(null); // Clear user data in context
         toast.success("Logout successful");
      } catch (error) {
         toast.error(error.message || "An error occurred during logout");
      } finally {
         setLoading(false); // Stop the loading state
      }
   };

   return { logout, loading };
};

export default useLogout;
