import type {Meta} from '@storybook/react';

import {InpType, Input} from './Input'
import React, {ChangeEvent, useState} from "react";
import {action} from "@storybook/addon-actions";

const meta = {
    title: 'Kabzda kak prosto/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

export const UncontrolledInput = () => {
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
}

/*
* відповідь chat GPT:
* import React, { ChangeEvent, useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
  title: 'Kabzda kak prosto/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} as Meta;

const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Input {...args} onChange={handleInputChange} /> - {value}
    </div>
  );
};

export const UncontrolledInput = Template.bind({});
UncontrolledInput.args = {
  // Задати властивості компонента, які хочеш протестувати
};
* */
