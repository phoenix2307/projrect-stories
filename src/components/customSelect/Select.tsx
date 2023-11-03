import React, {useState} from "react";

type OptionsType = {
    id: any // типа id
    title: string // содержимое выбраного элемента
}

type SelectType = {
    options: OptionsType[]
}

export const Select = (props: SelectType) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    let [value, setValue] = useState<string>('none')
    // value = props.options.filter(el => el.id === props.id)[0].title
    const choiceElementList = (title: string) => {
        value = title
        setValue(value)
        setCollapsed(!collapsed)

    }
    const click = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <SelectTitle
                options={props.options}
                click={click}
                value={value}
            />
            {!collapsed && <SelectList
              listOptions={props.options}
              choice={choiceElementList}
            />}
        </div>
    )
}

type SelectTitleType = {
    id?: any
    options: OptionsType[]
    click: () => void
    value: string
}
const SelectTitle = (props: SelectTitleType) => {
    return (
        <div>
            <input value={props.value}/>
            <button onClick={() => props.click()}>arrow</button>
        </div>
    )
}

type SelectListType = {
    listOptions: OptionsType[]
    choice: (title: string) => void
}
const SelectList = (props: SelectListType) => {

    return (
        <div>
            {props.listOptions.map(i => <div onClick={()=> props.choice(i.title)}>{i.title}</div>)}
        </div>

    )
}