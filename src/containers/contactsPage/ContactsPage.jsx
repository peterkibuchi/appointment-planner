import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { Table } from "../../components/table/Table";

export const ContactsPage = ({ contacts, addContact, removeContact }) => {
  /* Define state variables for contact info and duplicate check */
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  /* Using hooks, check for contact name in the contacts array variable in props */
  useEffect(() => {
    setDuplicate(false); // Resets duplicate state to allow one to submit once changes are made

    contacts.forEach(contact => {
      if (name === contact.name && occupation === contact.occupation) {
        setDuplicate(true);
      }
    });
  }, [name, occupation, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Add contact info and clear data if the contact name is not a duplicate */
    if (!duplicate) {
      addContact(name, occupation, phoneNumber, email);
      setName("");
      setOccupation("");
      setPhoneNumber("");
      setEmail("");
    } else {
      console.log("Couldn't create new contact. Check if contact already exists and whether form inputs have been entered correctly.");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          name={name} setName={setName}
          occupation={occupation} setOccupation={setOccupation}
          phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
          email={email} setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <Table page="contacts" items={contacts} removeItem={removeContact} />
      </section>
    </div>
  );
};
