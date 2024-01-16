import { CellValue } from "./CellValue"
import { Button } from "./components/Button";

type CellForIntervallType = {
    callBackMin: (min: number) => void
    callBackMax: (max: number) => void
}

export const CellForIntervall = ({callBackMin,callBackMax}: CellForIntervallType) => {

    const valueCouterSet = (value: number,idValue: string) => {
        idValue === 'max' ? callBackMax(value) : callBackMin(value);
    }

    return(
        <div className='count'>
            <div className='wrapper'>
            <CellValue name={'max value'} valueCounterSet={valueCouterSet} idValue={'max'}/>
            <CellValue name={'start value'} valueCounterSet={valueCouterSet} idValue={'min'}/>
            </div>
            <Button name={"set"} onClick={()=>{}} />
        </div>
    )
}