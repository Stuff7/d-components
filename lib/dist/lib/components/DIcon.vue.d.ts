declare const ICON_MAP: {
    "exclamation-triangle": string;
    plus: string;
    trash: string;
    "chevron-down": string;
};
export type IconName = keyof typeof ICON_MAP;
declare const _default: import("vue").DefineComponent<{
    name: {
        type: import("vue").PropType<"exclamation-triangle" | "plus" | "trash" | "chevron-down">;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: import("vue").PropType<"exclamation-triangle" | "plus" | "trash" | "chevron-down">;
        required: true;
    };
}>>, {}, {}>;
export default _default;
