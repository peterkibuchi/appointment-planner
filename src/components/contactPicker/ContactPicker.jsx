import React from "react";

export const ContactPicker = ({ contact, contacts, handleContactChange }) => {
  return (
    <select name="contact" value={contact} onChange={handleContactChange} required>
      <option key="none" value="Not Specified"></option>
      {contacts.map((contact, index) => {
        return <option key={index} value={contact.name}>{contact.name}</option>;
      })}
    </select>
  );
};