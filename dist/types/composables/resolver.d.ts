import type { ImportsMap } from 'unplugin-auto-import/types';
/**
 * 合并包内 composables 的自动导入映射
 *
 * 原本每个包各自维护一个 resolver（包名即入口），合并成 @melt-js/libs-fan 后，
 * 入口变成子路径，这里显式声明，避免依赖 createRequire('./package.json').name。
 */
export declare const LIBS_FAN_PACKAGE = "@melt-js/libs-fan";
export declare const ComposablesAutoImports: ImportsMap;
