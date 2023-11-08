import type {Meta, StoryObj} from '@storybook/react';

import {Rating, RatingValueType} from './Rating';
import {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Kabzda kak prosto/Rating',
    component: Rating,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {

    },
} satisfies Meta<typeof Rating>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EmptyRating = () => <Rating value={0} onClick={x => x}/>
export const Rating1 = () => <Rating value={1} onClick={x => x}/>
export const Rating2 = () => <Rating value={2} onClick={x => x}/>
export const Rating3 = () => <Rating value={3} onClick={x => x}/>
export const Rating4 = () => <Rating value={4} onClick={x => x}/>
export const Rating5 = () => <Rating value={5} onClick={x => x}/>

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return <Rating value={rating} onClick={setRating}/>
}
