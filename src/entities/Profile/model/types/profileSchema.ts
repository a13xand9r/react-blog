import { Country, Currency } from 'shared/consts/common';

export type ValidateError = 'NAME_ERROR' | 'AGE_ERROR' | 'COUNTRY_ERROR' | 'SERVER_ERROR' | 'USERNAME_ERROR' | 'FORM_DATA_ERROR';

export interface Profile {
    first?: string;
    lastname?: string;
    age?: 26;
    currency?: Currency;
    country?: Country;
    city?: 'Moscow';
    username?: 'admin';
    avatar?: string;
};

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateError[];
}
