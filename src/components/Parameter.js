import React from 'react';

function Parameter({data}) {
    return (
        <div className={"parameter"}>
            <div className={'parameterIconNameRow'}>
                <img className={"titleIcon"} alt={'123'} src={data.src}/>
                <span className={"parameterName"}>  {data.name}</span>
            </div>
                <p className={'parameterValue'}>{data.value}</p>
        </div>
    );
}

export default Parameter;