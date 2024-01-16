import { ButtonHTMLAttributes } from "react"
import s from './Button.module.css'

type ButtonType = {
    name: string
    onClick: () => void
    disabled?: boolean
}

export const Button = ({name,onClick,disabled }:ButtonType) => {

    const onClickHandler = () => {
        onClick()
    }
    return (
        <button disabled={disabled} className={s.button} onClick={onClickHandler}>{name}</button>
    )
}