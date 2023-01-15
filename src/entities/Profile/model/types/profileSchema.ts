import { Country, Currency } from 'shared/consts/common';

export interface Profile {
    first: string;
    lastname: string;
    age: 26;
    currency: Currency;
    country: Country;
    city: 'Moscow';
    username: 'admin';
    avatar: string;
};

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
