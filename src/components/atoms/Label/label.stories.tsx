import React, { ComponentProps } from 'react';
import {Label} from "./index";
import {Story} from "@storybook/react/types-6-0"
export default {
    title: 'Label',
    component: Label,
}

const Template:Story<ComponentProps<typeof Label>> = (args)=> <Label {...args}/>

export const LoadingLabel = Template.bind({})

export const DefaultLabel = Template.bind({});
DefaultLabel.args={
    label:"Hello world!"
}

