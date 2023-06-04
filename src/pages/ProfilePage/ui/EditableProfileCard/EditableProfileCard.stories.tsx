import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getStoreDecorator } from 'shared/lib/storybook/decorators/StoreDecorator';

import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'pages/Profile/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {},
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
    getStoreDecorator({
        profile: {
            data: {
                currency: 'USD',
                avatar: 'https://imageio.forbes.com/specials-images/imageserve/63974b591dbcd3145c446ad4/0x0.jpg?format=jpg&width=1200',
                lastname: 'Novikov',
                first: 'Aleksandr',
                age: 26,
                city: 'Moscow',
                country: 'Russia',
                id: '1',
                username: 'albanick',
            },
        },
    }),
];
