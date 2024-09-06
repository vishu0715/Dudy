import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../hooks/userLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login({ username, password }); // Pass as object
    if (success) {
      navigate("/"); // Redirect to home page after login
    }
    // Optionally show an error message here if login fails
  };

  return (
    <div className="flex justify-center flex-col items-center min-w-96 mx-auto p-8">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-green-500 mb-4">
          Login <span className="text-violet-500">Dudy</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-green-500 hover:bg-green-600"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
