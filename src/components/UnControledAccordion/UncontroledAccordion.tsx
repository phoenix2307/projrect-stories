import React, {useState} from "react";

type UnControledAccordionPropsType = {
    titleValue: string
}

function UnControledAccordion(props: UnControledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} click={() => setCollapsed(!collapsed)}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    click: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={() => {
        props.click()
    }}>-- {props.title} --</h3>
}

function AccordionBody(props: any) {

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UnControledAccordion