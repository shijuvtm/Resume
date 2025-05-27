import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';

export default function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      <div>On Thursday</div>
      <SimpleAppointmentCard title="Health checkup complete" time="10:00" />
      <div>On Saturday</div>
      <SimpleAppointmentCard title="Ophthalmologist" time="12:00" />
    </div>
  );
}
