import React, { useState } from 'react'
import calculate from '../Functional/calculate'
import Button from '../Components/Button/Button'
import Output from '../Components/Output/Output'

import './App.css'

export default function App() {
const [display, setDisplay] = useState('');

const handleButtonClick = (buttonText) => {
  if (buttonText === 'C') {
    setDisplay('');
  } else if (buttonText === '=') {
    try {
      setDisplay(calculate(display));
    } catch (error) {
      setDisplay('Error');
    }
  } else {
    setDisplay((prevDisplay) => prevDisplay + buttonText);
  }
}

return (
    <div className='app'>
        <Output display={display}/>
        <div className='app-buttons'>
          <Button name={1} onClick={handleButtonClick}/>
          <Button name={2} onClick={handleButtonClick}/>
          <Button name={3} onClick={handleButtonClick}/>
          <Button name={"÷"} onClick={handleButtonClick}/>
          <Button name={4} onClick={handleButtonClick}/>
          <Button name={5} onClick={handleButtonClick}/>
          <Button name={6} onClick={handleButtonClick}/>
          <Button name={"x"} onClick={handleButtonClick}/>
          <Button name={7} onClick={handleButtonClick}/>
          <Button name={8} onClick={handleButtonClick}/>
          <Button name={9} onClick={handleButtonClick}/>
          <Button name={"-"} onClick={handleButtonClick}/>
          <Button name={"C"} onClick={handleButtonClick}/>
          <Button name={0} onClick={handleButtonClick}/>
          <Button name={"="} onClick={handleButtonClick}/>
          <Button name={"+"} onClick={handleButtonClick}/>
        </div>
    </div>
  )
}