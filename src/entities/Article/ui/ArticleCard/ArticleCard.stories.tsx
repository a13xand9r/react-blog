import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleCard } from './ArticleCard';

export default {
    title: 'entities/Article/ArticleCard',
    component: ArticleCard,
    argTypes: {},
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = args => (
    <div style={{ width: args.view === 'SMALL' ? '300px' : '100%' }}>
        <ArticleCard {...args} />
    </div>
);

export const Small = Template.bind({});
Small.args = {
    article: {
        createdAt: '21.02.2022',
        title: 'JavaScript Новости',
        views: 1024,
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        blocks: [],
        id: '1',
        subtitle: '',
        type: ['IT', 'ECONOMICS', 'SCIENCE'],
        user: {
            id: '1',
            username: 'albanick',
            avatar: 'https://images.freeimages.com/fic/images/icons/573/must_have/256/user.png',
        },
    },
    view: 'SMALL',
};

export const Big = Template.bind({});
Big.args = {
    article: {
        createdAt: '21.02.2022',
        title: 'JavaScript Новости',
        views: 1024,
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
        ],
        id: '1',
        subtitle: '',
        type: ['IT', 'ECONOMICS', 'SCIENCE'],
        user: {
            id: '1',
            username: 'albanick',
            avatar: 'https://images.freeimages.com/fic/images/icons/573/must_have/256/user.png',
        },
    },
    view: 'BIG',
};