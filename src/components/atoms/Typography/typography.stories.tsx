import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { Typography } from ".";

export default {
    title:"Typography",
    component : Typography
}

const Template : Story<ComponentProps<typeof Typography>> =(args)=><Typography {...args}/>

export const DefaultTypography = Template.bind({});
DefaultTypography.args={
    text:"Hello World!",
    type:"h1"
}

export const LoadingTypography = Template.bind({});
LoadingTypography.args={
    type:"h1"
}

export const MultiLineLoadingTypography = Template.bind({});
MultiLineLoadingTypography.args={
    type:"h1",
    lineCount:5
}