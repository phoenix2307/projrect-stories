import {Meta} from "@storybook/react";
import {UnControlledRating} from "./UnControlledRating";

const meta = {
    title: 'Kabzda kak prosto/UnControlledRating',
    component: UnControlledRating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof UnControlledRating>;

export default meta;

export const UnControlledRatingDemo = () => {
    return <UnControlledRating />
}

export const UnControlledRatingDefaultValue = () => {
    return <UnControlledRating defaultValue={4}/>
}