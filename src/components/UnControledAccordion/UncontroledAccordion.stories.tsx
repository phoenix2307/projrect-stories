import {OnOff} from "../OnOff/OnOff";
import {Meta} from "@storybook/react";
import UnControledAccordion from "./UncontroledAccordion";

const meta = {
    title: 'Kabzda kak prosto/UnControledAccordion',
    component: UnControledAccordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof UnControledAccordion>;

export default meta;

export const UnControledAccordionDemo = () => {
    return <UnControledAccordion titleValue={'UnControledAccordion'}/>
}