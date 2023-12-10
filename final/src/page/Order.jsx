import "./Order.css";
import { useState } from "react";
import { useRef } from "react";
import Validate from "./Validate";

function Order() {
  const [nameFormat, setNameFormat] = useState(false);
  const [emailFormat, setEmailFormat] = useState(false);
  const [phoneFormat, setPhoneFormat] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Male");
  const [otherOption, setOtherOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOtherOptionChange = (event) => {
    setOtherOption(event.target.value);
  };

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  function validateInputs(event) {
    event.preventDefault();

    if (nameInputRef.current.value === "") {
      setNameFormat(true);
    } else {
      setNameFormat(false);
    }

    if (emailInputRef.current.value === "") {
      setEmailFormat(true);
    } else {
      setEmailFormat(false);
    }

    if (phoneInputRef.current.value === "") {
      setPhoneFormat(true);
    } else {
      setPhoneFormat(false);
    }
  }

  return (
    <>
      <form className="order" action="/order" method="POST">
        <div className="order__name">
          <label className="name">Name:</label>
          <input
            name="name"
            className="order__name__input"
            placeholder="Required"
            ref={nameInputRef}
          />
          {nameFormat && <Validate />}
        </div>
        <div className="order__email">
          <label className="name">Email:</label>
          <input
            name="email"
            className="order__email__input"
            placeholder="Required"
            ref={emailInputRef}
          />
          {emailFormat && <Validate />}
        </div>
        <div className="phone">
          <label className="name">Mobile Phone: </label>
          <input
            name="phone2"
            className="order__phone__input"
            placeholder="Required"
            ref={phoneInputRef}
          />
          {phoneFormat && <Validate />}
        </div>
        <div className="menu">
          <label className="name">Select Branch: </label>
          <select name="Branch" required>
            <option value="0">Please select</option>
            <option value="1">New York</option>
            <option value="2">Seattle</option>
            <option value="3">Washington D.C.</option>
          </select>
          <div className="subscribe-gender">
            <label aria-label="select your gender">
              <span>Select Gender:</span>
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleDropdownChange}
              >
                <option value="none">Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            {selectedOption === "other" && (
              <div className="other-option">
                <label aria-label="other option">
                  <span>Please specify:</span>
                  <input
                    id="other-option"
                    value={otherOption}
                    onChange={handleOtherOptionChange}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            name="ad"
            id="advertising"
            defaultChecked={true}
          />
          <label className="advertising">
            I want to receive the lastest news of craft beer
          </label>
        </div>
        <button
          type="submit"
          className="order__submit"
          onClick={validateInputs}
        >
          Order!
        </button>
      </form>
    </>
  );
}

export default Order;
