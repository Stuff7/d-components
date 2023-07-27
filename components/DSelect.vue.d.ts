import type { Indexable } from "miscfe/types";
declare const _default: <SelectOption extends Record<Indexable, unknown>>(__VLS_props: {
    options: readonly SelectOption[];
    modelValue?: SelectOption | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    labelKey?: keyof SelectOption | undefined;
    valueKey?: keyof SelectOption | undefined;
    styleKey?: keyof SelectOption | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: Pick<{
    props: {
        options: readonly SelectOption[];
        modelValue?: SelectOption | undefined;
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        labelKey?: keyof SelectOption | undefined;
        valueKey?: keyof SelectOption | undefined;
        styleKey?: keyof SelectOption | undefined;
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: {
        default?(_: {
            selected: ([{
                type: import("vue").PropType<__VLS_NonUndefinedable<SelectOption>>;
                default: undefined;
            }] extends [import("vue").Prop<infer V, infer D>] ? unknown extends V ? import("@vue/shared").IfAny<V, V, D> : V : {
                type: import("vue").PropType<__VLS_NonUndefinedable<SelectOption>>;
                default: undefined;
            }) | undefined;
            focused: boolean;
        }): any;
    };
    emit: (e: "update:modelValue", modelValue: SelectOption) => void;
}, "attrs" | "emit" | "slots"> | undefined, __VLS_setup?: Promise<{
    props: {
        options: readonly SelectOption[];
        modelValue?: SelectOption | undefined;
        placeholder?: string | undefined;
        disabled?: boolean | undefined;
        labelKey?: keyof SelectOption | undefined;
        valueKey?: keyof SelectOption | undefined;
        styleKey?: keyof SelectOption | undefined;
    };
    expose(exposed: {}): void;
    attrs: any;
    slots: {
        default?(_: {
            selected: ([{
                type: import("vue").PropType<__VLS_NonUndefinedable<SelectOption>>;
                default: undefined;
            }] extends [import("vue").Prop<infer V, infer D>] ? unknown extends V ? import("@vue/shared").IfAny<V, V, D> : V : {
                type: import("vue").PropType<__VLS_NonUndefinedable<SelectOption>>;
                default: undefined;
            }) | undefined;
            focused: boolean;
        }): any;
    };
    emit: (e: "update:modelValue", modelValue: SelectOption) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            options: readonly SelectOption[];
            modelValue?: SelectOption | undefined;
            placeholder?: string | undefined;
            disabled?: boolean | undefined;
            labelKey?: keyof SelectOption | undefined;
            valueKey?: keyof SelectOption | undefined;
            styleKey?: keyof SelectOption | undefined;
        };
        expose(exposed: {}): void;
        attrs: any;
        slots: {
            default?(_: {
                selected: ([{
                    type: import("vue").PropType<__VLS_NonUndefinedable<SelectOption>>;
                    default: undefined;
                }] extends [import("vue").Prop<infer V, infer D>] ? unknown extends V ? import("@vue/shared").IfAny<V, V, D> : V : {
                    type: import("vue").PropType<__VLS_NonUndefinedable<SelectOption>>;
                    default: undefined;
                }) | undefined;
                focused: boolean;
            }): any;
        };
        emit: (e: "update:modelValue", modelValue: SelectOption) => void;
    } | undefined;
};
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
