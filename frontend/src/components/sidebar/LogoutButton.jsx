import { BiLogOutCircle } from "react-icons/bi";
import useLogout from "../../hooks/userLogout";


const LogoutButton = () => {
  const {loading, logout}=useLogout();
  return (
    <div className="mt-auto">
    {!loading ? (
        <BiLogOutCircle className="w-6 h-6 hover:text-sky-500 cursor-pointer" onClick={logout} />
    ):(
      <span className="loading loading-spinner"></span>
    )}
    </div>
  );
};

export default LogoutButton;