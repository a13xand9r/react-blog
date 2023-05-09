import { MutableRefObject, createContext, useContext } from 'react';

export const PageContext = createContext<{
    pageSectionRef: MutableRefObject<HTMLDivElement> | null;
}>({
    pageSectionRef: null,
});

export const usePageContext = () => useContext(PageContext);
