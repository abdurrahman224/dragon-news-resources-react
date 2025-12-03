
import { Link } from "react-router-dom";

const AuthLogin = () => {
  return (
    <div className=" max-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
 <h2 className=" text-2xl text-center font-bold p-10">Login Your Account </h2>


          < form className="fieldset">

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <h2>Don't have an account? <Link  className="text-red-950 hover:text-red-600 underline" to={"/auth/register"}>Sign up</Link></h2>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
