import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useGetUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Title } from '@/shared/ui/Title';
import { HStack } from '@/shared/ui/Stack';
import {
    getProfileReadOnly,
    profileActions,
    updateProfileData,
    useGetProfileData,
} from '@/entities/Profile';

export const ProfileHeader: FC<{ id?: string }> = memo(({ id }) => {
    const { t } = useTranslation('profilePage');

    const isReadOnly = useSelector(getProfileReadOnly);
    const authData = useGetUserAuthData();
    const profileData = useGetProfileData();
    const canEdit = authData?.id === profileData?.id;
    const dispatch = useAppDispatch();

    const onSave = useCallback(() => {
        dispatch(updateProfileData(id));
    }, [dispatch, id]);
    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelFormEdit());
    }, [dispatch]);
    const onEdit = useCallback(() => {
        dispatch(profileActions.toggleEditMode(false));
    }, [dispatch]);

    return (
        <HStack justify="between">
            <Title>{t('Profile')}</Title>
            {canEdit ? (
                isReadOnly ? (
                    <>
                        <Button
                            onClick={onEdit}
                            theme={ButtonTheme.OUTLINED}
                            data-testid="EditableProfileCard.editBtn"
                        >
                            {t('Edit')}
                        </Button>
                    </>
                ) : (
                    <HStack gap="16">
                        <Button
                            onClick={onSave}
                            theme={ButtonTheme.OUTLINED}
                            data-testid="EditableProfileCard.saveBtn"
                        >
                            {t('Save')}
                        </Button>
                        <Button
                            onClick={onCancel}
                            theme={ButtonTheme.OUTLINED_ERROR}
                            data-testid="EditableProfileCard.cancelBtn"
                        >
                            {t('Cancel')}
                        </Button>
                    </HStack>
                )
            ) : null}
        </HStack>
    );
});
