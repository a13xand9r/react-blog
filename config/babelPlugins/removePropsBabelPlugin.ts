import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbiddenProps: string[] = state.opts.props;

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (forbiddenProps.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
