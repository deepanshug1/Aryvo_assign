import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../components/User.css";

function User() {
  const navigate = useNavigate();
  const auth = getAuth();
  const handleSubmission = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="usercon">
        <div className="wrapper2">
          <h1 id="stat">Welcome you are an Authenticated Aryvo Driver</h1>
          <button id="logout" onClick={handleSubmission}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default User;
