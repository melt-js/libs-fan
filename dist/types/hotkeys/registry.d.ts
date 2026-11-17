import type { HotkeyBinding, HotkeyContextBase } from './types.js';
export declare const BUILTIN_HOTKEY_ID: {
    readonly systemInfoOpen: "system.info.open";
    readonly menuSearchOpen: "menuSearch.open";
    readonly menuNext: "menu.next";
    readonly menuPrev: "menu.prev";
    readonly tabbarPrev: "tabbar.prev";
    readonly tabbarNext: "tabbar.next";
    readonly tabbarCloseCurrent: "tabbar.closeCurrent";
    readonly tabbarGotoVisibleIndex: "tabbar.gotoVisibleIndex";
    readonly tabbarGotoLast: "tabbar.gotoLast";
    readonly pageReload: "page.reload";
    readonly menuSearchMoveUp: "menuSearch.moveUp";
    readonly menuSearchMoveDown: "menuSearch.moveDown";
    readonly menuSearchConfirm: "menuSearch.confirm";
    readonly menuSearchClose: "menuSearch.close";
};
export type BuiltinHotkeyId = typeof BUILTIN_HOTKEY_ID[keyof typeof BUILTIN_HOTKEY_ID];
/**
 * Hotkeys registry 维护约定
 *
 * 1. 新增框架内建快捷键优先在这里补充定义，不要在业务组件里直接写死键位字符串
 * 2. 这里仅维护“定义”和“展示元数据”，不要把业务 handler 塞进 registry
 * 3. 配置类开关尽量写在 enabled / help.visible 中，避免帮助面板与真实行为不一致
 * 4. 需要展示在快捷键帮助面板中的项，必须补充 help
 * 5. 仅局部场景使用的快捷键，也建议在这里定义，再由对应组件按需注册
 */
export declare const builtinGlobalHotkeyBindings: HotkeyBinding<BuiltinHotkeyId, HotkeyContextBase>[];
export declare const builtinMenuSearchHotkeyBindings: HotkeyBinding<BuiltinHotkeyId, HotkeyContextBase>[];
