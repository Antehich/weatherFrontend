import React from 'react';

import DayCard from './DayCard';

// eslint-disable-next-line react/prop-types
function DaysRow({ days }) {
  return (
    <div className="daysRow">
      {/* eslint-disable-next-line react/prop-types */}
      {days.map((day) => <DayCard key={`${day.date}`} data={day} />)}
    </div>
  );
}

export default DaysRow;
