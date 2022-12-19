import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getStoreDecorator } from 'shared/lib/storybook/decorators/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.decorators = [getStoreDecorator({
    login: {
        username: 'admin123',
        password: '123',
    },
})];

export const WithError = Template.bind({});
WithError.decorators = [getStoreDecorator({
    login: {
        error: 'Ошибка авторизации',
        username: 'admin123',
        password: '123',
    },
})];

export const WithLoading = Template.bind({});
WithLoading.decorators = [getStoreDecorator({
    login: {
        isLoading: true,
        username: 'admin123',
        password: '123',
    },
})];
