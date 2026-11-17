import type { MaybeRefOrGetter } from 'vue';
import type { BuiltinHotkeyId } from './registry.js';
import type { HotkeyBinding, HotkeyContextBase, HotkeyHandler, HotkeyHandlersMap, HotkeyIdMap, HotkeyIdValue } from './types.js';
type EmptyHotkeyIdMap = Record<never, never>;
export type HotkeyId<TExtId extends HotkeyIdMap = EmptyHotkeyIdMap> = BuiltinHotkeyId | HotkeyIdValue<TExtId>;
export interface CreateHotkeysOptions<TExtId extends HotkeyIdMap = EmptyHotkeyIdMap, TContext extends HotkeyContextBase = HotkeyContextBase> {
    extendIds?: TExtId;
    extendGlobalHotkeyBindings?: readonly HotkeyBinding<HotkeyId<TExtId>, TContext>[];
    extendScopedHotkeyBindings?: readonly HotkeyBinding<HotkeyId<TExtId>, TContext>[];
    getContext: () => TContext;
}
export declare function createHotkeys<const TExtId extends HotkeyIdMap = EmptyHotkeyIdMap, TContext extends HotkeyContextBase = HotkeyContextBase>(options: CreateHotkeysOptions<TExtId, TContext>): {
    HOTKEY_ID: {
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
    } & TExtId;
    hotkeyIds: HotkeyId<TExtId>[];
    globalHotkeyBindings: HotkeyBinding<HotkeyId<TExtId>, TContext>[];
    menuSearchHotkeyBindings: HotkeyBinding<HotkeyId<TExtId>, TContext>[];
    hotkeyBindings: HotkeyBinding<HotkeyId<TExtId>, TContext>[];
    useHotkey: (id: HotkeyId<TExtId>, handler: HotkeyHandler, active?: MaybeRefOrGetter<boolean>) => void;
    useHotkeyBindings: (handlers: HotkeyHandlersMap<HotkeyId<TExtId>>, active?: MaybeRefOrGetter<boolean>) => void;
};
export {};
