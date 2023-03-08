import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from './../../../../entities/Article/model/selectors/getArticleDetails';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentType } from 'entities/Comment';

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
