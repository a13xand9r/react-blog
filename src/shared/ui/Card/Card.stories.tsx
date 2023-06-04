import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};
