import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {},
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = args => <Listbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        {
            value: 'javascript',
            content: 'javascript',
        },
        {
            value: 'C++',
            content: 'C++',
        },
        {
            value: 'java',
            content: 'java',
            disabled: true,
        },
        {
            value: 'python',
            content: 'python',
        },
        {
            value: 'newLang',
            content: 'New language with long name',
        },
    ],
    value: 'javascript',
    label: 'Language',
};
