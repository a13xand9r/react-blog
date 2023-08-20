import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { CommentType } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    CommentType[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetailsComments/fetchCommentsByArticleId',
    async (articleId, { rejectWithValue, extra }) => {
        if (!articleId) {
            return rejectWithValue('error');
        }
        try {
            const response = await extra.api.get<CommentType[]>(`/comments`, {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    }
);
