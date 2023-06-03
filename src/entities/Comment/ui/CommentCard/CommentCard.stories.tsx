import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    comment: {
        id: '1',
        text: 'Крутой пост! Очень полезно!',
        user: {
            id: '1',
            username: 'Alex',
            avatar: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
        },
    },
    isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
