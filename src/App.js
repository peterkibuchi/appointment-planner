import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const mockContacts = [
    {name: "Jessica Atreides", occupation: "Bene Gesserit", phoneNumber: "+44-701-020304", email: "jessica@caladan.com"},
    {name: "Duncan Idaho", occupation: "Sword Master", phoneNumber: "+1 790 639723", email: "duncan@atreides.com"},
    {name: "Dr. Yueh", occupation: "Suk Doctor", phoneNumber: "0769 420420", email: "yueh@wanna.com"},
    {name: "Stilgar", occupation: "Naib of Sietch Tabr", phoneNumber: "+10 720 121999", email: "stil@tabr.com"}
  ];

  const mockAppointments = [
    {title: "'Thopter Training", contact: "Duncan Idaho", date: "10190-07-21", time: "14:00"},
    {title: "Sword Training", contact: "Duncan Idaho", date: "10194-05-01", time: "08:00"},
    {title: "Ride a Sandworm", contact: "Stilgar", date: "10198-08-13", time: "06:00"},
    {title: "Bene Gesserit Training", contact: "Jessica Atreides", date: "10220-04-20", time: "10:00"}
  ];

  /* Define state variables for contacts and appointments */
  const [contacts, setContacts] = useState(mockContacts);
  const [appointments, setAppointments] = useState(mockAppointments);

  // Runs ONCE when the app first renders
  useEffect(() => {
    getLocalContacts();
    getLocalAppointments();
  }, []);

  useEffect(() => {
    saveLocalContacts();
  }, [contacts]);

  useEffect(() => {
    saveLocalAppointments();
  }, [appointments]);

  // Retrieving Data from Local Storage
  const getLocalContacts = () => {
    if (localStorage.getItem("contacts") === null) {
      localStorage.setItem("contacts", JSON.stringify([]));
    } else {
      const storedContacts = JSON.parse(localStorage.getItem("contacts"));
      setContacts(storedContacts);
    }
  }

  const getLocalAppointments = () => {
    if (localStorage.getItem("appointments") === null) {
      localStorage.setItem("appointments", JSON.stringify([]));
    } else {
      const storedAppointments = JSON.parse(localStorage.getItem("appointments"));
      setAppointments(storedAppointments);
    }
  }

  // Saving Data to Local Storage
  const saveLocalContacts = () => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  const saveLocalAppointments = () => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }

  /* Implement functions to add and remove contacts and appointments */
  const addContact = (name, occupation, phoneNumber, email) => {
    let contact = {
      name: name,
      occupation: occupation,
      phoneNumber: phoneNumber,
      email: email
    };
    setContacts([...contacts, contact]);
  }

  const removeContact = (index) => {
    setContacts(contacts.filter((contact, i) => i !== index));
  }

  const addAppointment = (title, contact, date, time) => {
    let appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
    setAppointments([...appointments, appointment]);
  }

  const removeAppointment = (index) => {
    setAppointments(appointments.filter((appointments, i) => i !== index));
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>

      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} removeContact={removeContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment} removeAppointment={removeAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;