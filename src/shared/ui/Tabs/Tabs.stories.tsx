import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
    tabs: [
        {
            text: 'Tab 1',
            value: 'tab1',
        },
        {
            text: 'Tab 2',
            value: 'tab2',
        },
        {
            text: 'Tab 3',
            value: 'tab3',
        },
    ],
    value: 'tab2',
};
