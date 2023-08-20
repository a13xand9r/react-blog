import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { CommentType } from '@/entities/Comment';

import { getArticleDetailsData } from './../../../../entities/Article/model/selectors/getArticleDetails';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<CommentType, string, ThunkConfig<string>>(
    'articleDetailsComments/addCommentForArticle',
    async (text, { rejectWithValue, extra, getState, dispatch }) => {
        const article = getArticleDetailsData(getState());
        const user = getUserAuthData(getState());
        try {
            const response = await extra.api.post<CommentType>(`/comments`, {
                articleId: article?.id,
                userId: user?.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article?.id));

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    }
);
