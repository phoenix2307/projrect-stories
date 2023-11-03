import type {Meta, StoryObj} from '@storybook/react';

import {Accordion} from "./Accordion";
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    title: 'Kabzda kak prosto/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordion>

export const FirstStory: Story = {
    args: {
        titleValue: 'some title',
        collapsed: true,
        onChange: ()=>{},
        items: [
            {title: 'Alex', value: 1},
            {title: 'Nika', value: 2},
            {title: 'Natalie', value: 3}
        ],
        onClick: ()=>{}

    }
}

export const CollapsedAccordion = () => {
    return (
        <div>
            <Accordion
                titleValue={'Accordion collapsed'}
                collapsed={true}
                onChange={() => {
                }}
                items={[
                    {title: 'Alex', value: 1},
                    {title: 'Nika', value: 2},
                    {title: 'Natalie', value: 3}
                ]}
                onClick={() => {
                }}
            />
        </div>
    )
}

export const OpenedAccordion = () => {
    return (
        <div>
            <Accordion
                titleValue={'Accordion opened'}
                collapsed={false}
                onChange={() => {
                }}
                items={[
                    {title: 'Alex', value: 1},
                    {title: 'Nika', value: 2},
                    {title: 'Natalie', value: 3}
                ]}
                onClick={() => {
                }}
            />
        </div>
    )
}

export const AccordionDemo = () => {

    const [collapsed, setCollapsed] = useState(true)
    const [title, setTitle] = useState('Accordion collapsed')
    const changeAccordion = () => {
        setCollapsed(prev => !prev)
        collapsed
            ? setTitle('Accordion opened')
            : setTitle('Accordion collapsed')
    }

    return (
        <div>
            <Accordion
                titleValue={title}
                collapsed={collapsed}
                onChange={changeAccordion}
                items={[
                    {title: 'Alex', value: 1},
                    {title: 'Nika', value: 2},
                    {title: 'Natalie', value: 3}
                ]}
                onClick={() => {
                }}
            />
        </div>
    )
}

