<script context="module" lang="ts">
    import TestGrammar from '@services/compiler?worker';
</script>

<script lang="ts">
    import { debounceTime, Subject } from 'rxjs';
    import Code from '@components/code.svelte';
    import Tree from '@components/tree.svelte';
    import gM from '@services/grammar.ne?raw';
    import { onMount } from 'svelte';
    import SplitView from '@components/split-view.svelte';
    let grammar = gM;
    let error = '';
    let errorType = '';
    let input = `require("INC_Class.lua")

cAnimal=setclass("Animal")

function cAnimal.methods:init(action, cutename) 
	self.superaction = action
	self.supercutename = cutename
end`;
    let result;
    let viewport: HTMLElement;
    let grammarResizer;
    let inputResizer;
    let showTree: boolean = false;
    let treeData: any;
    let lastrun = 0;
    const sub = new Subject<void>();

    function OnUpdate() {
        viewport?.classList.add('pending');
        sub.next();
    }

    onMount(() => {
        sub.pipe(debounceTime(2000)).subscribe(() => RunGrammar());
        OnUpdate();
    });

    function RunGrammar() {
        const timestamp = Date.now();
        lastrun = timestamp;
        const tester = new TestGrammar();
        tester.addEventListener('message', (r) => {
            if (lastrun == timestamp) {
                viewport?.classList.remove('pending');
                const { data } = r;
                error = '';
                result = '';
                if (data.error) {
                    error = `Error: ` + JSON.stringify(data.error);
                }
                if (data.result) {
                    result = data.result;
                    try {
                        treeData = TraverseObject(data.result);
                    } catch (e) {
                        treeData = null;
                    }
                }
            }
            tester.terminate();
        });
        tester.postMessage({ grammar, input });
    }

    function TraverseObject({ name, data }) {
        const o = { name, data: [] };
        if (typeof name != 'string' || !Array.isArray(data)) {
            throw 'Is Not Tree';
        }
        for (let i = 0; i < data.length; i++) {
            const value = data[i];
            if (typeof value == 'string') {
                o.data.push({ value });
            } else if (Array.isArray(value)) {
                o.data.push(
                    ...TraverseObject({ data: value, name: '' }).data.map((v, i) => {
                        v.name = `${v.name} #${i}`;
                        return v;
                    })
                );
            } else {
                o.data.push(TraverseObject(value));
            }
        }
        return o;
    }

    function loadGrammar(e) {
        grammarResizer = e.detail.resize;
    }

    function loadInput(e) {
        console.log(e);
        inputResizer = e.detail.resize;
    }

    function resize() {
        inputResizer();
        grammarResizer();
    }
</script>

<SplitView on:resize={resize}>
    <Code slot="left" language="nearley" bind:value={grammar} width="fill" height="fill" on:edit={OnUpdate} on:load={loadGrammar} />
    <Code slot="right" language="nearley" bind:value={input} width="fill" height="fill" on:edit={OnUpdate} on:load={loadInput} />
    <div bind:this={viewport} slot="bottom" class="viewport">
        {#if !error}
            {#if treeData}
                <button class="material-icons text secondary" on:click={() => (showTree = false)}>data_object</button>
                <button class="material-icons text secondary" on:click={() => (showTree = true)}> account_tree </button>
            {/if}
            {#if treeData && showTree}
                <Tree tree={treeData} />
            {/if}
            {#if !treeData || !showTree}
                <pre>{JSON.stringify(result, null, 2)}</pre>
            {/if}
        {/if}
        {#if error}
            <pre class="errors">{error}</pre>
        {/if}
    </div>
</SplitView>

<style lang="scss">
    .errors {
        white-space: pre;
    }
    .viewport {
        width: 100%;
        height: 100%;
        overflow: auto;
        opacity: 1;
        transition: all 2s;

        &:global(.pending) {
            opacity: 0.5;
        }
    }
</style>
