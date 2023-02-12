type ClassNameMod =
    | Record<string, boolean | string | undefined | null>
    | undefined;

export const classNames = (
    ...classes: Array<ClassNameMod | string>
): string => {
    const totalClassNames = classes.reduce((acc: string[], classNameMod) => {
        if (!classNameMod) {
            return acc;
        }

        if (typeof classNameMod === 'string') {
            return [...acc, classNameMod];
        }

        const modNames = Object.keys(classNameMod).reduce(
            (acc: string[], className) => {
                if (classNameMod[className]) {
                    return [...acc, className];
                }
                return acc;
            },
            []
        );

        return [...acc, ...modNames];
    }, []);

    return totalClassNames.join(' ');
};
