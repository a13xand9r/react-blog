import { FC, FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice';
import { getCommentFormText } from '../model/selectors/getCommentFormData';

import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    onSend: (text: string) => void;
    className?: string;
}

export const AddCommentForm: FC<AddCommentFormProps> = memo(({ onSend, className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getCommentFormText);
    useDynamicReducerLoader('addCommentForm', addCommentFormReducer);

    const onCommentChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );
    const onSendHandler = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onSend(text ?? '');
            onCommentChange('');
        },
        [onCommentChange, onSend, text]
    );
    return (
        <form onSubmit={onSendHandler} className={classNames(className, styles.AddCommentForm)}>
            <Input
                className={styles.input}
                value={text}
                onChange={onCommentChange}
                placeholder={t('Type comment text')}
            />
            <Button type="submit" theme={ButtonTheme.OUTLINED}>
                {t('Send')}
            </Button>
        </form>
    );
});
