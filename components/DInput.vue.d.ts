declare const _default: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"number" | "text">;
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    textarea: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"number" | "text">;
        default: string;
    };
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    textarea: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    type: "number" | "text";
    label: string;
}, {}>;
export default _default;
