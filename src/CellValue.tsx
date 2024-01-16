import { ChangeEvent, useState } from "react";

type CellValueType = {
    name: string
    valueCounterSet: (value: number,idValue:string) => void
    idValue: string
}

export const CellValue = ({name,valueCounterSet,idValue}:CellValueType) => {
    
    const [counterValue,setCounterValue] = useState<number>(0);

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCounterValue(Number(e.currentTarget.value));
        valueCounterSet(counterValue,idValue);
   }

    return(
        <div>
           <label htmlFor={name}>{name}</label>
            <input type={'number'} id={name} onChange={onChangeHandler}/>
        </div>
    )
}