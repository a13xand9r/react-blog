import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { ReducersList, StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { filterArticlesReducer } from 'features/FilterArticles/model/slice/filterArticlesSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsCommentsReducer,
    addCommentForm: addCommentFormReducer,
    filterArticles: filterArticlesReducer,
    articlesPage: articlesPageReducer,
};

export const getStoreDecorator =
    (state?: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state as StateSchema}
                asyncReducers={
                    {
                        ...defaultAsyncReducers,
                        ...asyncReducers,
                    } as ReducersMapObject<StateSchema>
                }
            >
                <StoryComponent />
            </StoreProvider>
        );
