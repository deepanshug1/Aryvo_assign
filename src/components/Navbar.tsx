import { faGear, faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";
import { NavLink } from "react-router-dom";

type ChangeEventHandler = (event: ChangeEvent<HTMLSelectElement>) => void;

function Navbar() {
  const now = new Date();
  const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
  const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  const selectOption: ChangeEventHandler = () => {};
  return (
    <>
      <div className="Navbar">
        <div className="leftex">
          <p className="logo">aryvo</p>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Trips">Trips</NavLink>
          <NavLink to="/Drivers">Drivers</NavLink>
          <NavLink to="/Customers">Customers</NavLink>
          <NavLink to="/Finance">Finance</NavLink>
          <NavLink to="/Reports">Reports</NavLink>
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
