<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    export let layout: 'stack' | 'row' = 'stack';
    let container: HTMLElement;
    let a: HTMLElement;
    let b: HTMLElement;
    let divider: HTMLElement;
    let last = { x: 0, y: 0 };
    let moving: HTMLElement;
    const dispatch = createEventDispatcher();

    onMount(() => {
        divider.addEventListener('mousedown', onmousedown);
        divider.addEventListener('touchstart', ontouchstart);
    });

    function move(e) {
        e.preventDefault();
        const axis = layout == 'row' ? 'X' : 'Y';
        const clientAxis = `client${axis}`;
        const point = e.type == 'mousemove' ? e[clientAxis] : e.touches[0][clientAxis];
        let prop: 'width' | 'height' = axis == 'X' ? 'width' : 'height';
        const delta = point - (last[axis] || point);
        last[axis] = point;
        resize(a, b, prop, delta);
        dispatch('resize', axis);
    }

    function ontouchstart(e) {
        moving = e.target;
        e.preventDefault();
        moving.addEventListener('touchmove', move);
        moving.addEventListener('touchend', ontouchend);
    }

    function ontouchend(e) {
        e.preventDefault();
        moving.removeEventListener('touchmove', move);
        moving.removeEventListener('touchend', ontouchend);
    }

    // for desktop
    function onmousedown(e) {
        e.preventDefault();
        moving = e.target;
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', onmouseup);
    }
    function onmouseup(e) {
        e.preventDefault();
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', onmouseup);
    }

    function resize(a: HTMLElement, b: HTMLElement, prop: 'height' | 'width', delta: number) {
        if (delta < 0) {
            const h = Math.round(parseInt(getComputedStyle(a)[prop]) + delta);
            a.style.flex = `0 ${h < 10 ? 0 : h}px`;
            b.style.flex = '1 0';
        }
        if (delta > 0) {
            const h = Math.round(parseInt(getComputedStyle(b)[prop]) - delta);
            b.style.flex = `0 ${h < 10 ? 0 : h}px`;
            a.style.flex = '1 0';
        }
    }
</script>

<div bind:this={container} class={layout}>
    <div bind:this={a} class="item">
        <slot name="a" />
    </div>

    <div bind:this={divider} data-divider={layout} />

    <div bind:this={b} class="item">
        <slot name="b" />
    </div>
</div>

<style lang="scss">
    .row,
    .stack {
        display: flex;
        height: 100%;
        overflow: hidden;
    }
    .stack {
        flex-direction: column;
    }
    .item {
        overflow: hidden;
        flex: 50%;
    }

    [data-divider='stack'] {
        padding: 12px;
        height: 1px;
        cursor: row-resize;

        &::after {
            display: block;
            content: ' ';
            height: 4px;
            border-radius: 4px;
            background-image: linear-gradient(to right, var(--primary), var(--secondary), var(--primary));
        }
    }

    [data-divider='row'] {
        padding: 12px;
        width: 1px;
        height: calc(100% - 12px);
        cursor: col-resize;

        &::after {
            display: block;
            height: inherit;
            content: ' ';
            width: 4px;
            border-radius: 4px;
            background-image: linear-gradient(to bottom, var(--primary), var(--secondary));
        }
    }
</style>
