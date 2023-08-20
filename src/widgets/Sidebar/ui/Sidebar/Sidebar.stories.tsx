import { ComponentStory, ComponentMeta } from '@storybook/react';

import { getStoreDecorator } from '@/shared/lib/storybook/decorators/StoreDecorator';

import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.decorators = [
    getStoreDecorator({
        user: {
            authUser: {},
        },
    }),
];
