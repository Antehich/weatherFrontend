import React from 'react';

function Parameter({data}) {
    return (
        <div className={"parameter"}>
                <img className={"titleIcon"} alt={'123'} src={data.src}/>
                <span className={"parameterName"}> {data.name}</span>
                <p className={'parameterValue'}>{data.value}</p>
        </div>
    );
}

export default Parameter;