import React from 'react';

function DayCard({data}) {
    return (
        <div className={"dayCard"}>
            <p>{data.time}</p>
        </div>
    );
}

export default DayCard;