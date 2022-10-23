type ClassNameMod = Record<string, boolean | string>

export const classNames = (...classes: (ClassNameMod | string)[]): string => {
    const totalClassNames = classes.reduce((acc, classNameMod) => {
        if (typeof classNameMod === 'string') {
            return [...acc, classNameMod];
        }

        const modNames = (Object.keys(classNameMod) as (keyof ClassNameMod)[]).reduce((acc, className) => {
            if (classNameMod[className]) {
                return [...acc, className]
            }
            return acc;
        },
            []);

        return [...acc, ...modNames];
    }, []);

    return totalClassNames.join(' ');
};