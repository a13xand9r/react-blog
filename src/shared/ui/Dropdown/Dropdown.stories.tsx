import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown, DropdownItem } from './Dropdown';
import { Button } from '../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {},
    decorators: [
        (Story) => (
            <div style={{ padding: '200px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const items: DropdownItem[] = [
    {
        content: 'Go main page',
    },
    {
        content: 'Logout',
    },
    {
        content: 'Go to your articles',
    },
];

export const TopLeft = Template.bind({});
TopLeft.args = {
    buttonElement: <Button>Choose</Button>,
    items,
    position: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    buttonElement: <Button>Choose</Button>,
    items,
    position: 'top right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    buttonElement: <Button>Choose</Button>,
    items,
    position: 'bottom left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    buttonElement: <Button>Choose</Button>,
    items,
    position: 'bottom right',
};
