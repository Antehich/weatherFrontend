import React from 'react';
import DayCard from "./DayCard";

function RightPanel({data}) {
    return (
        <div className='rightPanel'>
            <DayCard data={data}/>
        </div>
    );
}

export default RightPanel;