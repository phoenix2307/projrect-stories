import React, {FC, useEffect, useState} from 'react';
import s from './Clock.module.css'

type ClockPT = {}

export const Clock: FC<ClockPT> = ({}, ...props) => {

    const [toggle, setToggle] = useState(true)

    const getTwoSymbolsDateValue = (param: number) => param < 10 ? `0${param}` : param

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        // функція для зачистки setInterval
        //якщо в setInterval ми повертаємо іще якусь ф-цію, то вона автоматично запускається перед демонтажем компонента
        // типу як метод ComponentWillUnMount
        return () => {
            // для того щоб метод clearInterval спрацював, передаємо йому інфу про який саме setInterval йдетьтся
            clearInterval(intervalID)
        }
    }, [])

    const hours = getTwoSymbolsDateValue(date.getHours())
    const minutes = getTwoSymbolsDateValue(date.getMinutes())
    const seconds = getTwoSymbolsDateValue(date.getSeconds())

    const toggleClock = () => {
        setToggle(!toggle)
    }

    return (
        <div className={s.clock}>
            <div className={s.toggle}
                 onClick={toggleClock}>
                PUSH
            </div>
            {
                toggle ?
                    <DigitalClock hour={hours} minutes={minutes} seconds={seconds}/>
                    :
                    <AnalogClock date={date}/>
            }

        </div>

    );
};

/*
* ДЗ:
* зробити аналоговий годинник
* реалізувати вибір варіантів відображення типів годинника
* */

type AnalogClockType = {
    date: Date
}
export const AnalogClock: FC<AnalogClockType> = ({date}) => {

    const exactPositionArrowHours = (minutes: number) => {
        if (minutes > 0 && minutes <= 15) {
            return date.getHours() * 30 + 6
        }
        if (minutes > 15 && minutes <= 15) {
            return date.getHours() * 30 + 6
        }
        if (minutes >= 30 && minutes < 45) {
            return date.getHours() * 30 + 12
        }
        if (minutes >= 45 && minutes <= 59) {
            return date.getHours() * 30 + 18
        } else {
            return date.getHours() * 30
        }
    }
    const hoursDegree = exactPositionArrowHours(date.getMinutes())
    const minutesDegree = date.getMinutes() * 6
    const secondsDegree = date.getSeconds() * 6

    return (
        <div className={s.analogClock}>
            <div className={s.hour}>
                <div className={s.hours} style={{transform: `rotate(${hoursDegree}deg)`}}>
                </div>
            </div>

            <div className={s.minute}>
                <div className={s.minutes} style={{transform: `rotate(${minutesDegree}deg)`}}></div>
            </div>

            <div className={s.second}>
                <div className={s.seconds} style={{transform: `rotate(${secondsDegree}deg)`}}></div>
            </div>
        </div>
    )
}

type DigitalClockType = {
    hour: string | number
    minutes: string | number
    seconds: string | number
}
export const DigitalClock: FC<DigitalClockType> = ({hour, minutes, seconds}) => {
    return (
        <div className={s.digitalClock}>
            <br/>
            <span>{hour}</span>
            :
            <span>{minutes}</span>
            :
            <span>{seconds}</span>
        </div>
    )
}
