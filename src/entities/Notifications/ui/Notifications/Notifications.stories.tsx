import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notifications } from './Notifications';

export default {
    title: 'entities/Notifications',
    component: Notifications,
    argTypes: {},
} as ComponentMeta<typeof Notifications>;

const Template: ComponentStory<typeof Notifications> = (args) => <Notifications {...args} />;

export const Default = Template.bind({});
Default.args = {};
