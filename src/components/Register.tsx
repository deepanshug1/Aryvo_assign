import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import FileUpload from "./FileUpload";
import ToggleSwitch from "./ToggleSwitch";
import { auth } from "./firebase";

function Register() {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  const [warning, setWarning] = useState<boolean>(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    license: "",
  });

  const handleWarning = () => {
    setWarning(true);
  };

  const handleValue = () => {
    setValue(value);
  };

  const handleSubmission = () => {
    if (!userData.name || !userData.email || !userData.license) {
      alert("Fill Name Email and License");
    }

    createUserWithEmailAndPassword(auth, userData.email, userData.license)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: userData.name,
        });
        navigate("/user");
      })
      .catch((err: { code: string }) => {
        if (err.code === "auth/email-already-in-use") {
          setWarning(false);
        } else {
          console.log(err.code);
        }
      });
  };

  return (
    <>
      <div className="container">
        <p className="subhead">Signup a driver</p>
        <br />
        <div className="inp">
          <label htmlFor="i1">Enter Full Name</label>
          <input
            type="text"
            id="i1"
            className="form-inp"
            onChange={(event) =>
              setUserData((prev) => ({ ...prev, name: event.target.value }))
            }
            required
          />
        </div>
        <div className="inp">
          <label htmlFor="i2">Enter Contact Number</label>
          <PhoneInput
            id="i2"
            value={value}
            onChange={handleValue}
            className="form-inp"
          />
        </div>
        <div className="inp">
          <label htmlFor="i3">Enter Email Address</label>
          <input
            type="email"
            id="i3"
            className="form-inp"
            onChange={(event) =>
              setUserData((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>
        <br />
        <div id="warn-con">
          <p hidden={warning} id="warn">
            An account already exists with these contact details, you need to
            merge the accounts.<br></br>Or use different details.
          </p>
        </div>
        <button hidden={warning} id="warn-butn" onClick={handleWarning}>
          Yes
        </button>
        <p className="capt">View Account</p>
        <div className="seph"></div>
        <div className="inp2">
          <label htmlFor="i4">Accounting Ref</label>
          <input type="text" id="i4" className="form-inp" />
        </div>
        <div className="inp2">
          <label htmlFor="i5">Nominal Code</label>
          <input type="text" id="i5" className="form-inp" />
        </div>
        <div className="inp2">
          <label htmlFor="i6">
            Call Sign &nbsp;&nbsp;&nbsp;&nbsp;<div className="qm">?</div>
          </label>
          <input type="text" id="i6" className="form-inp" />
        </div>
        <div className="inp2">
          <label htmlFor="i7">
            Commission <div className="qm">?</div>
          </label>
          <input type="text" id="i7" className="form-inp" />
        </div>
        <div className="inp2">
          <label htmlFor="i8">
            Weekly Charge <div className="qm">?</div>
          </label>
          <input type="text" id="i8" className="form-inp" />
        </div>
        <div className="inp2">
          <label htmlFor="i9">Driver Group</label>
          <input
            type="text"
            id="i9"
            className="form-inp"
            placeholder="Select all that apply"
          />
        </div>
        <div className="seph"></div>
        <div className="inp2">
          <label htmlFor="i10">
            Home Address <div className="detail">Click for manual entry</div>
          </label>
          <input type="text" id="i10" className="form-inp" />
        </div>
        <div className="seph"></div>
        <p className="subhead">License Information </p>
        <div className="detail">Click for manual entry</div>
        <br />
        <div className="inp2">
          <label htmlFor="i11">DVLA License</label>
          <input
            type="text"
            id="i11"
            className="form-inp"
            onChange={(event) =>
              setUserData((prev) => ({ ...prev, license: event.target.value }))
            }
          />
        </div>
        <p className="License-inf">Male</p>
        <p className="License-inf">1967-10-26</p>
        <p className="License-inf">Address Match</p>
        <div className="License-inf dot"></div>
        <p className="License-inf">Type: Full</p>
        <p className="License-inf">Status: Valid</p>
        <br />
        <p className="License-ex">
          Endorcements
          <br />
          LegalLiteral: Exceeding statuory speed limit on a public road
          <br />
          offence Date: 2018-04-28
          <br />
          penaltyPoints: 3<br />
        </p>
        <div className="seph"></div>
        <p className="subhead">Taxi or PH Badge Information</p>
        <br />
        <div className="inp3">
          <label htmlFor="i12">Driver Type</label>
          <input type="text" id="i12" className="form-inp" />
        </div>
        <div className="inp3">
          <label htmlFor="i13">Issued By</label>
          <input type="text" id="i13" className="form-inp" />
        </div>
        <div className="inp3">
          <label htmlFor="i14">Badge Number</label>
          <input type="text" id="i14" className="form-inp" />
        </div>
        <br />
        <div className="taxi-info">Safegaurding Certificate</div>
        <div className="taxi-info">B-TECH</div>
        <div className="taxi-info">Wheelchair certif</div>
        <div className="seph"></div>
        <p className="subhead">Vehicle Information </p>
        <div className="detail">Click for manual entry</div>
        <br />
        <div className="inp4">
          <label htmlFor="i15">Registration</label>
          <input type="text" id="i15" className="form-inp" />
        </div>
        <div id="vinf-con">
          <p className="vehicle-inf">Make: Rover</p>
          <p className="vehicle-inf">Color: Blue</p>
          <p className="vehicle-inf">Year: 2020</p>
          <p className="vehicle-inf">Euro Status: EURO 6</p>
          <p className="vehicle-inf">Fuel: Petrol</p>
          <p className="vehicle-inf">Engine: 2494</p>
        </div>
        <br />
        <div className="inp4">
          <label htmlFor="i16">Model</label>
          <input type="text" id="i16" className="form-inp" />
        </div>
        <div className="inp4">
          <label htmlFor="i17">Passengers</label>
          <input type="text" id="i17" className="form-inp" />
        </div>
        <div className="inp4">
          <label htmlFor="i18">Ride Type</label>
          <input type="text" id="i18" className="form-inp" />
        </div>
        <div className="inp4">
          <label htmlFor="i19">Body Type</label>
          <input type="text" id="i19" className="form-inp" />
        </div>
        <br />
        <p className="vex">DVLA MOT: 09 / 10 / 2023</p>
        <p className="vex">DVLA TAX: 09 / 10 / 2023</p>
        <br />
        <div className="inp4">
          <label htmlFor="i20">Plate Number</label>
          <input type="text" id="i20" className="form-inp" />
        </div>
        <div className="inp4">
          <label htmlFor="i21">Issued By</label>
          <input type="text" id="i21" className="form-inp" />
        </div>
        <div id="toggles">
          <ToggleSwitch label="PPE Barrier" />
          <ToggleSwitch label="Disable Access" />
          <p>Premium Vehicle</p>
          <p>Hackney Carriage</p>
          <p>Pets</p>
          <p>Wide Car</p>
        </div>
        <div className="inp4">
          <label htmlFor="i22">Insurance Certificate Number</label>
          <input type="text" id="i22" className="form-inp" />
        </div>
      </div>

      <div className="sepv"></div>
      <div className="container2">
        <p className="subhead">Documents and Expiry Dates</p>
        <br />
        <div id="files-container">
          <FileUpload flabel="DVLA License" Required="Required" />
          <FileUpload flabel="Compliance Certificate" Required="Required" />
          <FileUpload flabel="Insurance Certificate" Required="Required" />
          <FileUpload flabel="Proof of Address" Required="Required" />
          <FileUpload flabel="Vehicle Plate" Required="Required" />
          <FileUpload flabel="Hackney Badge License" Required="Required" />
          <FileUpload
            flabel="Private Hire Badge License"
            Required="Required depending on what licence they are joining with"
          />
          <FileUpload flabel="Operators License" Required="" />
          <FileUpload flabel="Public Liability" Required="" />
          <FileUpload flabel="Employers Liability" Required="" />
          <FileUpload flabel="Form B" Required="Required" />
          <FileUpload flabel="Enhanced DBS" Required="Required" />
        </div>

        <button onClick={handleSubmission} id="subm">
          Submit
        </button>
      </div>
    </>
  );
}

export default Register;
