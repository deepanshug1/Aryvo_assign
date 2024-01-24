import { FC } from "react";
import "./ToggleSwitch.css";

interface ToggleSwitchProps {
  label: string;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ label }) => {
  return (
    <div className="tcontainer">
      <div className="labeltext">{label} </div>
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name={label} id={label} />
        <label className="tlabel" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
