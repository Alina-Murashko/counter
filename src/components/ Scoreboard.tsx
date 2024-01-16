import s from './ Scoreboard.module.css'

 type ScoreboardProps = {
    counterValue: number
    classes: boolean
 }
 console.log(s.scoreboard)
 export const Scoreboard = ({counterValue,classes}: ScoreboardProps) => {
    return (
        <div className={classes ? `${s.scoreboard} ${s.red}`: s.scoreboard}>{counterValue}</div>
    )
 }