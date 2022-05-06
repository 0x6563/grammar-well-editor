<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';

    let top: HTMLElement;
    let left: HTMLElement;
    let right: HTMLElement;
    let bottom: HTMLElement;
    let horzRule: HTMLElement;
    let vertRule: HTMLElement;
    let last = { x: 0, y: 0 };
    let moving: HTMLElement;
    const dispatch = createEventDispatcher();

    onMount(() => {
        horzRule.addEventListener('mousedown', onmousedown);
        horzRule.addEventListener('touchstart', ontouchstart);
        vertRule.addEventListener('mousedown', onmousedown);
        vertRule.addEventListener('touchstart', ontouchstart);
    });

    function move(e) {
        e.preventDefault();
        const axis = moving.getAttribute('data-axis');
        const clientAxis = `client${axis}`;
        const point = e.type == 'mousemove' ? e[clientAxis] : e.touches[0][clientAxis];
        let a, b, prop;
        if (axis == 'X') {
            a = left;
            b = right;
            prop = 'width';
        } else {
            a = top;
            b = bottom;
            prop = 'height';
        }
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

<div class="stack">
    <div bind:this={top} class="row">
        <div bind:this={left} class="item">
            <slot name="left" />
        </div>
        <div bind:this={horzRule} class="vr-div" data-axis="X" />
        <div bind:this={right} class="item">
            <slot name="right" />
        </div>
    </div>
    <div bind:this={vertRule} class="hr-div" data-axis="Y" />
    <div bind:this={bottom} class="item">
        <slot name="bottom" />
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
</style>
