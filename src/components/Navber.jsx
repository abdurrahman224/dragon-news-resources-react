import { Link } from "react-router-dom";
import user from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navber = () => {
const {Uset} = useContext(AuthContext)


  return (
    <div className="flex justify-between items-center my-4">
      <div className="">{Uset.name}</div>
      <div className="nae space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login">
        <div className="flex gap-6">
          <div>
            {" "}
            <img className="" src={user} alt="User" />
          </div>
          <button className="bg-green-500 px-6 py-3 rounded-sm">
            {" "}
            <Link to="auth/login">Login</Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
