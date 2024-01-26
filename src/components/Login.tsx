import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    license: "",
  });

  const handleSubmission = () => {
    if (!userData.email || !userData.license) {
      alert("Fill Email and License");
    }

    signInWithEmailAndPassword(auth, userData.email, userData.license)
      .then(() => {
        console.log("hello");
        navigate("/user");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  return (
    <>
      <div className="full">
        <div className="wrapper">
          <h1>Driver Login</h1>
          <div className="Linput">
            <input
              type="text"
              placeholder="Email Address"
              onChange={(event) =>
                setUserData((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
              required
            />
            <FaUser className="Lpicon" />
          </div>
          <div className="Linput">
            <input
              type="text"
              placeholder="Password - [DVLA License]"
              onChange={(event) =>
                setUserData((prev) => ({
                  ...prev,
                  license: event.target.value,
                }))
              }
              required
            />
            <FaLock className="Lpicon" />
          </div>

          <button onClick={handleSubmission}>Login</button>
          <div className="register">
            <p>
              Don't have an account?{" "}
              <NavLink id="a" to="/register">
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
