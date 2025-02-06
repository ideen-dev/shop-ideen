import React from "react";
import { useState } from "react";
import login from "../assets/login.png";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="absolute top-0 left-0 h-full w-full z-50  bg-white">
      {/* CONTAINER  */}
      <div className="flex h-full w-full">
        {/* IMAGE SIDE  */}
        <div className="w-1/2 hidden sm:block">
          <img
            src={login} 
            alt="loginImg"
            className="object-cover h-full w-full "
          />
        </div>
        {/* FORM SIDE  */}
        <div className="flexCenter w-full sm:w-1/2 text-[90%] ">
          <form className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 ">
            <div className="w-full mb-5">
              <h3 className="bold-36">{currState}</h3>
            </div>
            {currState === "Sign Up" && (
              <div className="w-full">
                <label className="medium-15" htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-1.5 ring-1 ring-slate-900/5 rounded bg-primary mt-1 "
                />
              </div>
            )}
            <div className="w-full">
              <label className="medium-15" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="E-mail"
                className="w-full px-3  ring-1 py-1.5 ring-slate-900/5 rounded bg-primary mt-1 "
              />
            </div>
            <div className="w-full">
              <label className="medium-15" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full   px-3 ring-1 ring-slate-900/5 rounded bg-primary mt-1 "
              />
            </div>
            <button className="btn-dark w-full mt-5 !py-[8px] !rounded" type="submit">
              {currState === "Sign Up" ? "Sign Up" : "Login"}
            </button>
            <div className="w-full flex flex-col gap-y-3 ">
              {currState === "Login" ? (
                
              <>
                <div className="underline medium-15" >Forgot your password?</div>
                  <div className="underline medium-15">
                    Don't have an account?{" "}
                    <span
                      onClick={() => setCurrState("Sign Up")}
                      className="cursor-pointer pl-1"
                    >
                      Create account
                    </span>
                  </div>
              </>
              ) : (
                <div className="underline medium-15">
                  Already have an account?{" "}
                  <span
                    onClick={() => setCurrState("Login")}
                    className="cursor-pointer pl-1"
                  >
                    Login
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
