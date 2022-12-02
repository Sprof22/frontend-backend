import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="signup-container flex flex-col align-center justify-center w-full">
      <h1 className="text-yellow-400" style={{fontSize: "40px"}}>Welcome to FrontEnd-BackEnd</h1>
      <h1 className="text-orange-400" style={{fontSize: "40px"}}>What you wanna do?</h1>
      <div className="links flex gap-3 p-2 align-center justify-center">
        <Link
          to="/signup"
          className="bg-slate-500 rounded p-1 hover:bg-sky-700"
          >
          SignUP
        </Link>
        <Link to="/login" className="bg-slate-500 rounded p-1 hover:bg-sky-700">
          LogIn
        </Link>
      </div>
    </div>
  );
}

export default Home;
