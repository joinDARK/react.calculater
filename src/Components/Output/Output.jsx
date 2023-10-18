import React from 'react'
import './Output.css'

function Output({display}) {
    return (
        <input type="text" id='display' placeholder='Введите цифры' value={display} readOnly/>
    )
}

export default Output