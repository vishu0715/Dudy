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