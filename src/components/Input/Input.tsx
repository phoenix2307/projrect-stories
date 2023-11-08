import React, {ChangeEvent, ChangeEventHandler, useState} from "react";

export type InpType = {
    changeInputValue: (value: ChangeEvent<HTMLInputElement> | string) => void
}

export const ControlledInput = (props: InpType) => {

    return (
        <div>
            <input onChange={(event) => {
                let valueChanged = event.currentTarget.value
                props.changeInputValue(valueChanged)

            }}/>
        </div>
    )
};

export const Input = () => {
    const [value, setValue] = useState('')
    const change = (event: ChangeEvent<HTMLInputElement>) => {
        let valueChanged = event.currentTarget.value
        setValue(valueChanged)
    }
    return (
        <div>
            <input onChange={change}/> - {value}
        </div>
    )
};