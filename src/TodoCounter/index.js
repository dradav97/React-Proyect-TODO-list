import React from 'react';
import './TodoCounter.css'


function TodoCounter({total, completed}) {
    return (
        <React.Fragment>
            <h4>Tu progreso es </h4>
            <progress max={100} value={(completed/total)*100}>0%</progress>
            <span>{`${(completed/total)*100} %`}</span>
        </React.Fragment>
    )
}

export { TodoCounter } 