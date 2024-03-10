// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      const fullNameString = `${firstName} ${lastName}`;
      setFullName(fullNameString);
      // Clear input fields after submission
      setFirstName("");
      setLastName("");
      // Disable submit button after successful submission
      setSubmitDisabled(true);
      // Reset form error message
      setFormError("");
    } else {
      // Set form error message
      setFormError("Please fill out both first name and last name fields.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
    // Enable submit button only if both fields are filled
    setSubmitDisabled(firstName.trim() === "" || lastName.trim() === "");
  };

  return (
    <div className="form-container">
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" disabled={submitDisabled}>
            Submit
          </button>
          {formError && <p className="error-message">{formError}</p>}
        </div>
      </form>
      {fullName && (
        <div className="full-name-display">
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
}

export default App;

