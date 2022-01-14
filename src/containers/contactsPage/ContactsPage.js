import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /* Define state variables for contact info and duplicate check */
  let [name, setName] = useState("");
  let [occupation, setOccupation] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let [duplicate, setDuplicate] = useState(false);

  /* Using hooks, check for contact name in the contacts array variable in props */
  useEffect(() => {
    const savedContacts = props.contacts;

    if (savedContacts.length > 0) {
      savedContacts.forEach(contact => {
        if (name === contact.name && occupation === contact.occupation) {
          setDuplicate(true);
        }
      });
    }
  }, [name, occupation]);

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Add contact info and clear data if the contact name is not a duplicate */
    if (!duplicate) {
      props.addContact(name, occupation, phoneNumber, email);
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
          name={name} setName={setName} occupation={occupation} setOccupation={setOccupation}
          phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} email={email} setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={props.contacts} />
      </section>
    </div>
  );
};
