import React from "react";

type OnOffPropsType = {
    currentToggle: boolean
    changeToggle: (props: boolean) => void
}

function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: props.currentToggle ? 'green' : 'white',
        display: 'inline-block',
        padding: '2px'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: props.currentToggle ? 'white' : 'red',
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
        backgroundColor: props.currentToggle ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.changeToggle(true)}>ON</div>
            <div style={offStyle} onClick={() => props.changeToggle(false)}>OFF</div>
            <div style={indicatorStyle} onClick={() => {
                alert("TOGGLE")
            }}></div>
            { console.log('on-off')}
        </div>

    )
}

export default OnOff


