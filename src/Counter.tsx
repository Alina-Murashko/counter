import './App.css';
import { Scoreboard } from './components/ Scoreboard';
import { Button } from './components/Button';

type CounterType = {
    counterValue: number
    maxValue: number
    minValue: number
    onClickHandlerIncrease: () => void
    onClickHandlerReset: () => void
}

export const Counter = ({counterValue,maxValue,minValue,onClickHandlerIncrease,onClickHandlerReset}: CounterType) => {
    return (
        <div className='count'>
            <div className='wrapper'>
                <Scoreboard counterValue={counterValue} classes={counterValue === maxValue}/>
            </div>
            <div className='wrapper'>
              <Button disabled={counterValue === maxValue} name={"inc"} onClick={onClickHandlerIncrease} />
              <Button disabled={counterValue === minValue} name={"reset"} onClick={onClickHandlerReset} />
            </div>
          </div>
    )
}