import React from 'react';
import './styles.css'


function Header(props) {
    return (
        <div className='header'>
            <div className='container'>
                <h1>Добро пожаловать в лотерейный розгрыш с призами! <span>(нет)</span></h1>
            </div>
        </div>

    )
}

function Number(props) {
    return (
        <div className='elem'>
            <p>{props.number}</p>
        </div>
    )
}


export {Number, Header}