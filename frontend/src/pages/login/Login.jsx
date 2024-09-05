const Login = () => {
    return (
      <div className="flex justify-center flex-col items-center min-w-96 mx-auto p-8">
        <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
          <h1 className="text-3xl font-semibold text-center text-green-500 mb-4">
            Login <span className="text-violet-500">Dudy</span>
          </h1>
          <form>
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
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
              />
            </div>
            <a href="#" className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
              {"Don't"} have an account?
            </a>
            <div>
                <button className="btn btn-block btn-sm mt-2 bg-green-500 hover:bg-green-600 ">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  
  //Starting one
  /*const Login = () => {
    return (
      <div className="flex justify-center flex-col items-center min-w-96 mx-auto p-8">
        <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
          <h1 className="text-3xl font-semibold text-center text-green-500 mb-4">
            Login <span className="text-violet-500">Dudy</span>
          </h1>
          <form>
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
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-12 px-4 rounded-md focus:ring focus:ring-violet-300"
              />
            </div>
            <a href="#" className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
              {"Don't"} have an account?
            </a>
            <div>
                <button className="btn btn-block btn-sm mt-2 bg-green-500 hover:bg-green-600 ">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  */