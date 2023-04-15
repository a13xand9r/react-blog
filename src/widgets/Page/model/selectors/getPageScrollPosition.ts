import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

const getAllPagesScrollPositions = (state: StateSchema) => state.page.scrollPosition;

export const getPageScrollPosition = createSelector(
    getAllPagesScrollPositions,
    (_: StateSchema, currentPath: string) => currentPath,
    (scrollPositions, pathName) => scrollPositions[pathName] ?? 0
);
