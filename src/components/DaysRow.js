import React from 'react';
import DayCard from "./DayCard";

function DaysRow({days}) {
    return (
        <div className={'daysRow'}>
            {days.map(day => {return <DayCard key={`${day.date}`} data={day} />})}
        </div>
    );
}

export default DaysRow;