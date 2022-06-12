import React from "react";
import "./auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (data.password !== data.confirmPassword) {
        setConfirmPass(false);
      }
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="auth">
      {/* Left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>SQI SOCIAL</h1>
          <h6>Lorem, ipsum dolor sit amet consectetur.</h6>
        </div>
      </div>
      {/* Right side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Signup" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmPassword}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "center",
              marginRight: "5px",
            }}
          >
            Passwords do not match!
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {setIsSignUp((prev) => !prev); resetForm()}}
            >
              {isSignUp
                ? "Already have an account? Login here"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Sign Up" : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
}

// function SignUp(params) {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Signup</h3>

//         <div>
//           <input
//             type="text"
//             placeholder="First name"
//             className="infoInput"
//             name="firstname"
//           />
//           <input
//             type="text"
//             placeholder="Last name"
//             className="infoInput"
//             name="lastname"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="username"
//             placeholder="Username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//           />
//           <input
//             type="text"
//             className="infoInput"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an account? Login here
//           </span>
//         </div>
//         <button className="button infoButton" type="submit">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }
export default Auth;
