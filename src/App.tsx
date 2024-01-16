import React, { useState } from 'react';
import { Button } from './components/Button';
import { Scoreboard } from './components/ Scoreboard';
import './App.css';
import { Counter } from './Counter';
import { CellForIntervall } from './СellForIntervall';


function App() {

  const [minValue,setminValue] = useState<number>(0);
  const [maxValue,setmaxValue] = useState<number>(0);
  const [counterValue,setCounterValue] = useState<number>(minValue);

  const callBackMin = (min: number) => {
    setminValue(min);
    setCounterValue(min);

  }

  const callBackMax = (max: number) => {
    setmaxValue(max)
  }

const onClickHandlerIncrease = () => {
  if(counterValue < maxValue) {
    setCounterValue((prev)=> prev + 1);
  }
}

const onClickHandlerReset= () => {
  setCounterValue(minValue);
}




  return (
        <div className='App'>
          <CellForIntervall callBackMin={callBackMin} callBackMax={callBackMax}/>
          <Counter counterValue={counterValue} maxValue={maxValue} minValue={minValue} onClickHandlerReset={onClickHandlerReset} onClickHandlerIncrease={onClickHandlerIncrease}/>
        </div>
  );
}

export default App;


