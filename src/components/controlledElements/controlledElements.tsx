import React, {ChangeEvent, useState} from "react";

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        // debugger
        setParentValue(event.currentTarget.value)
    }

    return (
        <input value={parentValue} onChange={changeInput}/>
    )
}

export const ControlledCheckBox = () => {
    let [status, setStatus] = useState(false)
    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        status = event.currentTarget.checked
        setStatus(status)
    }
    return (
        <input type="checkbox" checked={status} onChange={changeInput}/>
    )
}

export const ControlledSelect = () => {
    const [option, setOption] = useState <string | undefined>(undefined)

    const changeOption = (event: ChangeEvent<HTMLSelectElement>) => {
        setOption(event.currentTarget.value)
    }

    return (
        <select value={option} onChange={changeOption}>
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Moscow</option>
            <option value="3">Kiev</option>
        </select>
    )
}