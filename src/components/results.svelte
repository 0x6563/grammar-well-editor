<script lang="ts">
    import { onMount } from 'svelte';
    import Result from './result.svelte';
    import { ResizeService } from '@services/resizing';
    export let results: any[] = [];
    let tabs: { result: any; label: string }[] = [];
    let active;
    $: {
        tabs = [];
        for (let i = 0; i < results.length; i++) {
            tabs.push({ result: results[i], label: `# ${i}` });
        }
        ShowTab(tabs[0]);
    }
    function ShowTab(tab) {
        active = tab;
        setTimeout(() => ResizeService.update(), 300);
    }
    onMount(() => {
        ShowTab(results[0]);
    });
</script>

<div class="container">
    <div class="labels">
        {#each tabs as tab, i}
            <div class="label" on:click={() => ShowTab(tab)} class:active={tab == active || (!active && i == 0)}>
                {tab.label}
            </div>
        {/each}
    </div>
    <div class="viewport">
        {#each tabs as tab, i}
            <div class="viewport-child" class:active={tab == active || (!active && i == 0)}>
                <Result result={tab.result} />
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .container {
        display: flex;
        height: 100%;
        flex-flow: column;
    }
    .viewport {
        flex: 1 1 auto;
        height: 100%;
        position: relative;
        .viewport-child {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            height: 100%;
            z-index: -1000;
            &.active {
                z-index: 0;
            }
        }
    }
    .labels {
        flex: 0 1 auto;
        height: 30px;
        white-space: nowrap;
        overflow: auto;
        .label {
            display: inline-block;
            height: 25px;
            line-height: 25px;
            cursor: pointer;
            border-bottom: solid 2px var(--background);
            padding: 0 12px;
            &.active {
                border-bottom: solid 2px var(--primary);
            }
        }
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
        }
    }
</style>
