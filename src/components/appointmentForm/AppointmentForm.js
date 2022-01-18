import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

export const AppointmentForm = ({
  title, setTitle,
  contact, setContact,
  date, setDate,
  time, setTime,
  contacts, handleSubmit
}) => {
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContactChange = (e) => {
    setContact(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text" name="title" id="title"
        minLength="4" maxLength="64"
        placeholder="e.g Desert Tour"
        value={title} onChange={handleTitleChange}
        required
      />

      <label htmlFor="contact">Contact:</label>
      <ContactPicker id="contact" contact={contact} contacts={contacts} handleContactChange={handleContactChange} />

      <label htmlFor="date">Date:</label>
      <input
        type="date" name="date" id="date"
        min={getTodayString()}
        value={date} onChange={handleDateChange}
        required
      />

      <label htmlFor="time">Time:</label>
      <input
        type="time" name="time" id="time"
        value={time} onChange={handleTimeChange}
        required
      />

      <input type="submit" />
    </form>
  );
};
