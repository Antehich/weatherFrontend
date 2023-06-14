import React from 'react';
import DaysRow from "./DaysRow";

function RightPanel({data}) {
    return (
        <div className='rightPanel'>
            <DaysRow days={data}/>
        </div>
    );
}

export default RightPanel;