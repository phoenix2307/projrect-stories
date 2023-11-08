import type {Meta} from '@storybook/react';

import {OnOff} from './OnOff'
import {useState} from "react";
import {action} from "@storybook/addon-actions";

const meta = {
    title: 'Kabzda kak prosto/OnOff',
    component: OnOff,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof OnOff>;

export default meta;


export const TestOn = () => {
    return <OnOff currentToggle={true} changeToggle={action('clicked')}/>
}

export const TestOff = () => {
    return <OnOff currentToggle={false} changeToggle={action('clicked')}/>
}

export const OnOffDemo = () => {
    const [toggle, setToggle] = useState(true)

    return <OnOff currentToggle={toggle} changeToggle={setToggle }/>
}