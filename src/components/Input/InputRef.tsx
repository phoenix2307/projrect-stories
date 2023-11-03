import React, {useRef, useState} from "react";


export const InpRef = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef <HTMLInputElement>(null)
    const save = () => {
        let el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={save}>saVe</button>
            - actual value: {value}
        </div>
    )
}