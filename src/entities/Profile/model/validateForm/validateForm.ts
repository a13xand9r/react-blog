import { Profile, ValidateError } from '../types/profileSchema';

export const validateProfileForm = (formData?: Profile): ValidateError[] => {
    if (!formData) {
        return ['FORM_DATA_ERROR'];
    }
    const errors: ValidateError[] = [];
    if (!formData.lastname || !formData.first) {
        errors.push('NAME_ERROR');
    }
    if (!formData.age) {
        errors.push('AGE_ERROR');
    }
    if (!formData.country) {
        errors.push('COUNTRY_ERROR');
    }
    if (!formData.username) {
        errors.push('USERNAME_ERROR');
    }

    return errors;
};
