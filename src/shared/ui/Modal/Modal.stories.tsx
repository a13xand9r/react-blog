import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemeDecorator } from 'shared/lib/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/theme/ThemeContext';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat expedita sapiente sequi qui reprehenderit dolor, dolores nemo dicta minus, hic quidem, odio pariatur asperiores corrupti? Qui soluta architecto illum blanditiis.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat expedita sapiente sequi qui reprehenderit dolor, dolores nemo dicta minus, hic quidem, odio pariatur asperiores corrupti? Qui soluta architecto illum blanditiis.',
};
Dark.decorators = [getThemeDecorator(Theme.DARK)];
