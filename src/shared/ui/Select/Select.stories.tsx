import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    options: [
        {
            value: 'Пункт 1',
            content: 'Пункт 1',
        },
        {
            value: 'Пункт 2',
            content: 'Пункт 2',
        },
    ],
};
