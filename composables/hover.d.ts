export default function useHover<T extends HTMLElement>(): readonly [import("vue").Ref<boolean>, import("vue").Ref<import("vue").UnwrapRef<T> | null>];
