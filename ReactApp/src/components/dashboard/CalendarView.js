import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';

export default function CalendarView() {
  const [date, setDate] = useState(new Date());

  
  const appointments = [
    { date: '2021-10-15', title: 'Dentist', time: '09:00' },
    { date: '2021-10-15', title: 'Physiotherapy', time: '15:00' },
    { date: '2021-10-16', title: 'Nutritionist', time: '11:00' },
  ];

  const selectedDateStr = date.toISOString().split('T')[0];
  const filteredAppointments = appointments.filter(app => app.date === selectedDateStr);

  return (
    <div className="calendar-container">
      <Calendar onChange={setDate} value={date} />
      <h3>Appointments on {selectedDateStr}</h3>
      <div className="appointment-details">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((app, index) => (
            <SimpleAppointmentCard key={index} title={app.title} time={app.time} />
          ))
        ) : (
          <p>No appointments</p>
        )}
      </div>
    </div>
  );
}

