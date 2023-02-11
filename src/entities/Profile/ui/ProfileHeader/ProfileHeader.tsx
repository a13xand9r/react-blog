import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import { profileActions } from 'entities/Profile/model/slice/profileSlice';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Title } from 'shared/ui/Title/Title';
import styles from './ProfileHeader.module.scss';

export const ProfileHeader: FC = memo(() => {
    const { t } = useTranslation('profilePage');

    const isReadOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelFormEdit());
    }, [dispatch]);
    const onEdit = useCallback(() => {
        dispatch(profileActions.toggleEditMode(false));
    }, [dispatch]);

    return (
        <div className={styles.header}>
            <Title>{t('Profile')}</Title>
            {
                isReadOnly ?
                    <>
                        <Button onClick={onEdit} className={styles.editBtn} theme={ButtonTheme.OUTLINED}>{t('Edit')}</Button>
                    </> :
                    <div className={styles.buttonsContainer}>
                        <Button onClick={onSave} className={styles.editBtn} theme={ButtonTheme.OUTLINED}>{t('Save')}</Button>
                        <Button onClick={onCancel} className={styles.editBtn} theme={ButtonTheme.OUTLINED_ERROR}>{t('Cancel')}</Button>
                    </div>
            }

        </div>
    );
});
