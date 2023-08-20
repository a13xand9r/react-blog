import { ComponentStory, ComponentMeta } from '@storybook/react';

import { getStoreDecorator } from '@/shared/lib/storybook/decorators/StoreDecorator';

import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'pages/Profile/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {},
    parameters: {
        mockData: [
            {
                url: `${__API_BASE_URL__}/profile/1`,
                method: 'GET',
                status: 200,
                response: {
                    id: '1',
                    first: 'Александр',
                    lastname: 'Новиков',
                    age: '26',
                    currency: 'RUB',
                    country: 'Russia',
                    city: 'Москва',
                    username: 'admin',
                    avatar: 'https://images.ctfassets.net/1wryd5vd9xez/4DxzhQY7WFsbtTkoYntq23/a4a04701649e92a929010a6a860b66bf/https___cdn-images-1.medium.com_max_2000_1_Y6l_FDhxOI1AhjL56dHh8g.jpeg',
                },
            },
        ],
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    id: '1',
};
Default.decorators = [
    getStoreDecorator({
        profile: {
            readonly: true,
        },
        user: {
            authUser: {
                id: '1',
            },
        },
    }),
];
