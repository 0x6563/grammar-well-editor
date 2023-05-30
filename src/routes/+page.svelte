<script context="module" lang="ts">
    import GrammarWellWorker from '@services/grammar-well.worker?worker';
    import LanguageWorker from '@services/language.worker?worker';
</script>

<script lang="ts">
    import type { languages } from 'monaco-editor';
    import { onMount } from 'svelte';
    import { debounceTime, Subject } from 'rxjs';
    import { Unflatten } from 'grammar-well/build/utility/general';

    import Code from '@components/code.svelte';
    import Modal from '@components/modal.svelte';
    import SplitView from '@components/split-view.svelte';
    import jgwell from '@services/json.gwell?raw';
    import { WorkerPromise } from '@services/worker-runner';
    import { DefaultLanguage } from '@services/gwell-monarch';
    import { ResizeService } from '@services/resizing';
    import Results from '@components/results.svelte';

    let grammar = localStorage.getItem('grammar') || jgwell;
    let input = localStorage.getItem('input') || JSON.stringify({ some: 'value' }, null, 2);
    let runError = '';
    let results = [];
    let viewport: HTMLElement;
    let tokensProvider: languages.IMonarchLanguage = DefaultLanguage;

    let lastrun = 0;
    const sub = new Subject<void>();
    function OnUpdate() {
        viewport?.classList.add('pending');
        localStorage.setItem('grammar', grammar);
        localStorage.setItem('input', input);
        sub.next();
    }

    onMount(() => {
        sub.pipe(debounceTime(2000)).subscribe(() => RunGrammar());
        OnUpdate();
    });

    async function RunGrammar() {
        const timestamp = Date.now();
        lastrun = timestamp;
        WorkerPromise(LanguageWorker, { grammar }).value.then((v) => (tokensProvider = v.result));
        const worker = WorkerPromise(GrammarWellWorker, { grammar, input });
        const { result, error } = Unflatten(await worker.value);
        if (lastrun == timestamp) {
            viewport?.classList.remove('pending');
            results = [];
            runError = '';
            if (error) {
                runError = `Error: ` + (typeof error == 'string' ? error : JSON.stringify(error));
            }
            results = result?.results || [];
        }
    }
</script>

<div class="wrapper">
    <SplitView on:resize={ResizeService.update} layout="row">
        <SplitView slot="a" on:resize={ResizeService.update} layout="stack">
            <div slot="a" class="section">
                <h1>Definition</h1>
                <div class="content">
                    <Code language="grammar-well" bind:value={grammar} width="fill" height="fill" on:edit={OnUpdate} />
                </div>
            </div>
            <div slot="b" class="section">
                <h1>Sample</h1>
                <div class="content">
                    <Code language="sample" bind:value={input} width="fill" height="fill" on:edit={OnUpdate} {tokensProvider} />
                </div>
            </div>
        </SplitView>
        <div bind:this={viewport} slot="b" class="section">
            <h1>Results</h1>
            <div class="content">
                {#if !runError}
                    <Results {results} />
                {:else}
                    <pre class="errors">{runError}</pre>
                {/if}
            </div>
        </div>
    </SplitView>
</div>
<Modal />

<style lang="scss">
    .section {
        display: flex;
        flex-flow: column;
        height: 100%;

        h1 {
            margin: 0;
            padding: 8px 16px 16px;
            flex: 0 1 auto;
            height: auto !important;
            font-family: inherit;
        }
        .content {
            flex: 1 1 auto;
            height: 100%;
        }
    }
    .wrapper {
        padding: 12px;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
    }
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
            filter: blur(4px);
        }
    }
</style>
