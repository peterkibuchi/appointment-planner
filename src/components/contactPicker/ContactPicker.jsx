import React from "react";

export const ContactPicker = ({ id, contact, contacts, handleContactChange }) => {
  return (
    <select name="contact" id={id} value={contact} onChange={handleContactChange} required>
      <option key="none" value=""></option>
      {contacts.map((contact, index) => {
        return <option key={index} value={contact.name}>{contact.name}</option>;
      })}
    </select>
  );
};