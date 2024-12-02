import React, { useState } from "react";
import "./Contact.css";
import Button from "../Button/Button";

const Contact = () => {
  const [valueText, setValueText] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [errors,setErrors] = useState({});

  const handleChangeInputText = (e) => {
    setValueText(e.target.value);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChangeInputEmail = (e) => {
    if (validateEmail(e.target.value)){
        setEmail(e.target.value);
        setErrors({
            ...errors,
            email: null,
        })
    }else {
        setErrors({
            ...errors,
            email: 'Email is not valid'
        });
    }
  };

  const handleChangeInputTextArea = (e) => {
    setTextArea(e.target.value);
  };

  const handleSubmit = () => {
    alert("thank you");
    console.log("text", valueText);
    console.log("email", email);
    console.log("textarea", textArea);
  };

  return (
    <div className="contact">
      <div className="formControl">
        <input
          onChange={handleChangeInputText}
          type="text"
          placeholder="subject"
        />
      </div>

      <div className="formControl">
        <input
          onChange={handleChangeInputEmail}
          type="email"
          placeholder="Email"
        />

        
        {errors.email &&<span>{errors.email}</span>}
        

      </div>

      <div className="formControl">
        <textarea onChange={handleChangeInputTextArea}>
          Your request here...
        </textarea>
      </div>

      <div className="formControl">
        <Button handleClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};
export default Contact;
