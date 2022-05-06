import { writable } from 'svelte/store';

function getStyle(querySelector: string, style: string) {
    const node = document.querySelector(querySelector);
    if (!node)
        return '';
    return window.getComputedStyle(node).getPropertyValue(style);
}

export const GetStyle = typeof window != 'undefined' ? getStyle : (querySelector: string, style: string) => '';

export const Theme = writable<'light' | 'dark'>();
export const Style = {
    font: '',
    basic: '',
    primary: '',
    secondary: '',
    background: '',
    diffuse: '',
};

Theme.subscribe(v => RefreshStyle());

export function RefreshStyle() {
    Style.font = GetStyle('#app', 'font');
    Style.basic = GetStyle('#swatch .basic', 'color');
    Style.primary = GetStyle('#swatch .primary', 'color');
    Style.secondary = GetStyle('#swatch .secondary', 'color');
    Style.background = GetStyle('#swatch .background', 'color');
    Style.diffuse = GetStyle('#swatch .diffuse', 'color');
}