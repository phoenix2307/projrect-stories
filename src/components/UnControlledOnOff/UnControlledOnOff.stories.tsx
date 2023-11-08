import {Meta} from "@storybook/react";
import {UnControlledOnOff} from "./UnControlledOnOff";
import {action} from "@storybook/addon-actions";

const meta = {
    title: 'Kabzda kak prosto/UnControlledOnOff',
    component: UnControlledOnOff,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof UnControlledOnOff>;

export default meta;

export const UnControlledOnOffDemo1 = () => {
    return <UnControlledOnOff defaultValue={true} onChange={action('clicked')} />
    // return <UnControlledOnOff onChange={()=>{}} />
}

export const UnControlledOnOffDemo2 = () => {
    return <UnControlledOnOff defaultValue={false} onChange={action('clicked')} />
}