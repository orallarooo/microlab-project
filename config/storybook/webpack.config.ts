import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader.ts';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(process.cwd(), 'src'),
    };

    config.resolve = config.resolve ?? {};
    config.resolve.modules = [...(config.resolve.modules ?? []), paths.src];
    config.resolve.extensions = [...(config.resolve.extensions ?? []), '.ts', '.tsx'];

    config.module = config.module ?? { rules: [] };
    config.module.rules = (config.module.rules ?? []).map((rule) => {
        if (rule && typeof rule === 'object' && 'test' in rule && rule.test && /svg/.test(String(rule.test))) {
            return { ...rule, exclude: /\.svg$/i } as RuleSetRule;
        }

        return rule as RuleSetRule;
    });

    config.module.rules = [
        ...(config.module.rules ?? []),
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        buildCssLoader(true),
    ];

    return config;
};
