type ArticleType = 'IT' | 'ECONOMICS' | 'SCIENCE';

type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE';

interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleTextBlockType extends ArticleBlockBase {
    type: 'TEXT';
    title: string;
    paragraphs: string[];
}
export interface ArticleImageBlockType extends ArticleBlockBase {
    type: 'IMAGE';
    src: string;
    title: string;
}
export interface ArticleCodeBlockType extends ArticleBlockBase {
    type: 'CODE';
    code: string;
}

export type ArticleBlocks = ArticleTextBlockType | ArticleImageBlockType | ArticleCodeBlockType;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlocks[];
}
