

/*
* ------------------Variant chan GPT-------------------*/

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Select, SelectType, OptionsType } from './Select';

export default {
    title: 'Kabzda kak prosto/Select',
    component: Select,
    argTypes: {},
} as Meta;

const Template: Story<SelectType> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { id: 1, title: 'Option 1' },
        { id: 2, title: 'Option 2' },
        { id: 3, title: 'Option 3' },
    ] as OptionsType[],
};

export const Select2 = Template.bind({});
Select2.args = {

    options: [
        { id: 1, title: '1' },
        { id: 2, title: ' 2' },
        { id: 3, title: ' 3' },
    ] as OptionsType[],
};

/*----------------------------------------------------------*/
