import React from "react";
import { Link } from "react-router-dom";

const AuthRegister = () => {

 const hendleSubmit = (e) =>{

e.preventDefault();
const from = new FormData(e.target);

const name = from.get("name")

const email = from.get("email")
const  password = from.get("password") 
console.log(name,email,password);


 }


  return (
    <div className=" max-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className=" text-2xl text-center font-bold p-10">
           Register Your Account{" "}
          </h2>

          <form onSubmit={hendleSubmit} className="fieldset">
            <label className="label">Your Name</label>
            <input name="name" type="name" className="input" placeholder="name" />
            
            <label  name="eamil" className="label">Email</label>
            <input name="email"  type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <h2>
            Already have an account?
            <Link
              className="text-red-950 hover:text-red-600 underline"
              to={"/auth/login"}
            >
              Sign in
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AuthRegister;
