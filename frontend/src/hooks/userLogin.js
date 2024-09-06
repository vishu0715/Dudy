import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      // Check if the status is not 200 (Unauthorized or other errors)
      if (res.status !== 200) {
        const data = await res.json(); // Get the error message
        throw new Error(data.error || 'Invalid username or password'); // If error message is provided, show it
      }

      const data = await res.json();
      localStorage.setItem("dudy-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Login successful");
      return true; // Indicate success
    } catch (error) {
      toast.error(error.message);
      return false; // Indicate failure
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
