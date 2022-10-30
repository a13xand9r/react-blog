type ClassNameMod = Record<string, boolean | string>;

export const classNames = (...classes: Array<ClassNameMod | string>): string => {
    const totalClassNames = classes.reduce((acc, classNameMod) => {
        if (!classNameMod) {
            return acc;
        }

        if (typeof classNameMod === 'string') {
            return [...acc, classNameMod];
        }

        const modNames = (Object.keys(classNameMod)).reduce((acc, className) => {
            if (classNameMod[className]) {
                return [...acc, className];
            }
            return acc;
        },
        []);

        return [...acc, ...modNames];
    }, []);

    return totalClassNames.join(' ');
};
