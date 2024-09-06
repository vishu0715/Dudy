import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/userSignUp";

const SignUp = () => {
  const [inputs,setInputs] = useState({
    name:'',
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    gender:''
  });

  const {loading,signup} = useSignup();
  const handleCheckboxChange = (gender) => {
         setInputs({...inputs,gender});
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex justify-center flex-col items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-green-500">
          Sign Up <span className="text-violet-500">Dudy</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
              value={inputs.name}
              onChange={(e) => setInputs({...inputs,name:e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
              value={inputs.username}
              onChange={(e) => setInputs({...inputs,username:e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
              value={inputs.email}
              onChange={(e) => setInputs({...inputs,email:e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
              value={inputs.password}
              onChange={(e) => setInputs({...inputs,password:e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md mt-2"
          disabled = {loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
          </button>
          <Link to="/login" className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block">
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


/*
//STARTING SignUP
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex justify-center flex-col items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-green-500">
          Sign Up <span className="text-violet-500">Dudy</span>
        </h1>
        <form>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
            />
          </div>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
            />
          </div>
          <GenderCheckbox/>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md mt-2">
            Sign Up
          </button>
          <a href="#" className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block">
            Already have an account? Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

*/