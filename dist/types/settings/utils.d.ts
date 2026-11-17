import type { RequiredDeep } from 'type-fest';
import type { SettingsLegacyOptions, SettingsOptions } from './types.js';
export declare const merge: import("defu").DefuFn;
export declare function diffTwoObj(originalObj: Record<string, any>, diffObj: Record<string, any>): Record<string, any>;
export declare function setSettings(settings: SettingsOptions): RequiredDeep<SettingsOptions>;
export declare function setSettingsLegacy(settingsLegacy: SettingsLegacyOptions): RequiredDeep<SettingsOptions>;
