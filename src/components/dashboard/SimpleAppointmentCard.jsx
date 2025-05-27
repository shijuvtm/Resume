import React from 'react';

export default function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card">
      <strong>{title}</strong>
      <p>{time}</p>
    </div>
  );
}
