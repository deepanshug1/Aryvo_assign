import { faBars, faGear, faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import { NavLink } from "react-router-dom";

type ChangeEventHandler = (event: ChangeEvent<HTMLSelectElement>) => void;

function Navbar() {
  const now = new Date();
  const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
  const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const [showNavbar, setShowNavbar] = useState(true);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const selectOption: ChangeEventHandler = () => {};
  return (
    <>
      <div className="Navbar">
        <div className="leftex">
          <p className="logo">aryvo</p>
          <button className="navbutton" onClick={handleShowNavbar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={`Navlinks ${showNavbar && "disable"}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Trips</NavLink>
            <NavLink to="/">Drivers</NavLink>
            <NavLink to="/">Customers</NavLink>
            <NavLink to="/">Finance</NavLink>
            <NavLink to="/Reports">Reports</NavLink>
          </div>
          <input type="text" placeholder="Search" className="search"></input>
        </div>
        <div className="rightex">
          <p className="date">
            {days[day]} {now.toLocaleString()}
          </p>
          <select className="dropdown" onChange={selectOption}>
            <option>Create</option>
            <option>Use</option>
          </select>
          <p className="extra">Operator Name </p>
          <div className="icon">
            <FontAwesomeIcon icon={faInbox} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faGear} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
