import useEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { StateSchema } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

import { EditableProfileCard } from './EditableProfileCard';

const initialState: Partial<StateSchema> = {
    profile: {
        data: {
            age: 26,
            first: 'Aleksandr',
            lastname: 'Novikov',
            id: '1',
            city: 'Moscow',
            country: 'Russia',
            currency: 'USD',
            username: 'albanick',
        },
        isLoading: false,
        readonly: true,
    },
    user: {
        authUser: {
            id: '1',
            username: 'albanick',
        },
        _isInit: true,
    },
};

describe('EditableProfileCard test', () => {
    test('EditableProfileCard should be editable', async () => {
        renderComponent(<EditableProfileCard id="1" />, {
            initialState,
            asyncReducers: { profile: profileReducer },
        });
        await useEvent.click(screen.getByTestId('EditableProfileCard.editBtn'));
        expect(screen.getByTestId('EditableProfileCard.saveBtn')).toBeInTheDocument();
    });
    test('EditableProfileCard can save', async () => {
        renderComponent(<EditableProfileCard id="1" />, {
            initialState,
            asyncReducers: { profile: profileReducer },
        });
        await useEvent.click(screen.getByTestId('EditableProfileCard.editBtn'));
        await useEvent.clear(screen.getByTestId('EditableProfileCard.firstInput'));
        await useEvent.type(screen.getByTestId('EditableProfileCard.firstInput'), 'admin');
        await useEvent.click(screen.getByTestId('EditableProfileCard.saveBtn'));
        expect(screen.getByTestId('EditableProfileCard.firstInput')).toHaveValue('admin');
    });
    test('EditableProfileCard should clear after click cancel button', async () => {
        renderComponent(<EditableProfileCard id="1" />, {
            initialState,
            asyncReducers: { profile: profileReducer },
        });
        await useEvent.click(screen.getByTestId('EditableProfileCard.editBtn'));
        await useEvent.clear(screen.getByTestId('EditableProfileCard.firstInput'));
        await useEvent.clear(screen.getByTestId('EditableProfileCard.lastnameInput'));
        await useEvent.type(screen.getByTestId('EditableProfileCard.firstInput'), 'admin');
        await useEvent.type(screen.getByTestId('EditableProfileCard.lastnameInput'), 'admin');
        await useEvent.click(screen.getByTestId('EditableProfileCard.cancelBtn'));
        expect(screen.getByTestId('EditableProfileCard.firstInput')).toHaveValue('Aleksandr');
        expect(screen.getByTestId('EditableProfileCard.lastnameInput')).toHaveValue('Novikov');
    });
    test("EditableProfileCard shouldn't save if first is empty", async () => {
        renderComponent(<EditableProfileCard id="1" />, {
            initialState,
            asyncReducers: { profile: profileReducer },
        });
        await useEvent.click(screen.getByTestId('EditableProfileCard.editBtn'));
        await useEvent.clear(screen.getByTestId('EditableProfileCard.firstInput'));
        await useEvent.click(screen.getByTestId('EditableProfileCard.saveBtn'));
        expect(screen.getByTestId('EditableProfileCard.errorTitle')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCard.saveBtn')).toBeInTheDocument();
        expect(screen.queryByTestId('EditableProfileCard.editBtn')).not.toBeInTheDocument();
    });
});
