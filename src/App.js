import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /* Define state variables for contacts and appointments */
  const [contacts, setContacts] = useState([
    {name: "Name", occupation: "Occupation", phoneNumber: "0712345678", email: "email@email.com"},
    {name: "Name", occupation: "Occupation", phoneNumber: "0712345678", email: "email@email.com"},
    {name: "Name", occupation: "Occupation", phoneNumber: "0712345678", email: "email@email.com"},
    {name: "Name", occupation: "Occupation", phoneNumber: "0712345678", email: "email@email.com"}
  ]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, occupation, phoneNumber, email) => {
    let contact = {
      name: name,
      occupation: occupation,
      phoneNumber: phoneNumber,
      email: email
    };
    setContacts(...contacts, contact);
  }

  const addAppointment = (title, contact, date, time) => {
    let appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
    setAppointments(...appointments, appointment);
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /* Implement functions to add data to contacts and appointments */

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
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
