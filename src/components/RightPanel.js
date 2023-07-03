import React from 'react';

import DaysRow from './DaysRow';

// eslint-disable-next-line react/prop-types
function RightPanel({ data }) {
  return (
    <div className="rightPanel">
      <DaysRow days={data} />
    </div>
  );
}

export default RightPanel;
