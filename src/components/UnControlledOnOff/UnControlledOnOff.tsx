import React, {useState} from "react";

type OnOffPropsType = {
    onChange: (on: boolean) => void
}
export function UnControlledOnOff (props: OnOffPropsType) {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
        display: 'inline-block',
        padding: '2px'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>ON</div>
            <div style={offStyle} onClick={offClicked}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
