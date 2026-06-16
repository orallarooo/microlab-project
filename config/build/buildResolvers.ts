import path from "path";
import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";


export function buildResolvers(options: BuildOptions): ResolveOptions {
    console.log('resolve src path:', path.resolve(__dirname, '..', '..', 'src'));
    return {
         extensions: ['.tsx', '.ts', '.js'],
        modules: [options.paths.src, 'node_modules'],
        preferRelative: true,
        mainFiles: ['index'],
        alias: {},

    }
}