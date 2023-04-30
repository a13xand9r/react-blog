import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from './Page';

export default {
    title: 'shared/Page',
    component: Page,
    argTypes: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = args => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {};