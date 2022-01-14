import React from "react";

export const ContactForm = ({
  name, setName,
  occupation, setOccupation,
  phoneNumber, setPhoneNumber,
  email, setEmail,
  handleSubmit
}) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text" name="name" id="name"
        minLength="4" maxLength="32"
        placeholder="e.g. Liet Kynes"
        value={name} onChange={handleNameChange}
        required
      />

      <label htmlFor="occupation">Occupation:</label>
      <input
        type="text" name="occupation" id="occupation"
        minLength="4" maxLength="32"
        placeholder="e.g Imperial Ecologist"
        value={occupation} onChange={handleOccupationChange}
        required
      />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel" name="phoneNumber" id="phoneNumber"
        pattern="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$"
        placeholder="XXX-XXX-XXXX"
        value={phoneNumber} onChange={handlePhoneNumberChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email" name="email" id="email"
        minLength="8" maxLength="32"
        placeholder="e.g. lietkynes@arrakis.com"
        value={email} onChange={handleEmailChange}
        required
      />

      <input type="submit" />
    </form>
  );
};
