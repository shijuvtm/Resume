import React from 'react';
import AnatomySection from './dashboard/AnatomySection';
import HealthStatusCards from './dashboard/HealthStatusCards';
import CalendarView from './dashboard/CalendarView';
import UpcomingSchedule from './dashboard/UpcomingSchedule';
import ActivityFeed from './dashboard/ActivityFeed';

export default function DashboardMainContent() {
  return (
    <div className="dashboard-content">
      <AnatomySection />
      <HealthStatusCards />
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </div>
  );
}
