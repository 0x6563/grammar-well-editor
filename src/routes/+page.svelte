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
    import { WorkerPromise, type WorkerPromiseResult } from '@services/worker-runner';
    import { DefaultLanguage } from '@services/gwell-monarch';
    import { ResizeService } from '@services/resizing';
    import Results from '@components/results.svelte';

    let grammar = localStorage.getItem('grammar') || jgwell;
    let input = localStorage.getItem('input') || JSON.stringify({ some: 'value' }, null, 2);
    let runError = '';
    let results = [];
    let viewport: HTMLElement;
    let progressbar: HTMLElement;
    let tokensProvider: languages.IMonarchLanguage = DefaultLanguage;
    let grammarWorker: WorkerPromiseResult;

    const RunnerSub = new Subject<void>();
    const SyntaxSub = new Subject<void>();
    function OnUpdate() {
        ResetProgress();

        localStorage.setItem('grammar', grammar);
        localStorage.setItem('input', input);
        RunnerSub.next();
    }
    function ResetProgress() {
        if (progressbar) {
            progressbar.style.animation = 'none';
            progressbar.offsetHeight; /* trigger reflow */
            progressbar.style.animation = null;
        }
    }
    function GrammarUpdate() {
        OnUpdate();
        SyntaxSub.next();
    }
    onMount(() => {
        SyntaxSub.pipe(debounceTime(2000)).subscribe(() => RunSyntax());
        RunnerSub.pipe(debounceTime(2000)).subscribe(() => RunGrammar());
        GrammarUpdate();
    });

    async function RunSyntax() {
        tokensProvider = (await WorkerPromise(LanguageWorker, { grammar }).value).result || tokensProvider;
    }

    async function RunGrammar() {
        viewport?.classList.add('pending');

        if (grammarWorker) {
            grammarWorker.reject();
        }
        grammarWorker = WorkerPromise(GrammarWellWorker, { grammar, input });
        const { result, error } = Unflatten(await grammarWorker.value);
        viewport?.classList.remove('pending');
        results = [];
        runError = '';
        if (error) {
            runError = `Error: ` + (typeof error == 'string' ? error : JSON.stringify(error));
        }
        results = result?.results || [];
    }
</script>

<div class="wrapper">
    <SplitView on:resize={ResizeService.update} layout="row">
        <SplitView slot="a" on:resize={ResizeService.update} layout="stack">
            <div slot="a" class="section">
                <h1>Definition</h1>
                <div class="content">
                    <Code language="grammar-well" bind:value={grammar} width="fill" height="fill" on:edit={GrammarUpdate} />
                </div>
            </div>
            <div slot="b" class="section">
                <h1>Sample</h1>
                <div class="content">
                    <Code language="sample" bind:value={input} width="fill" height="fill" on:edit={OnUpdate} {tokensProvider} />
                </div>
            </div>
        </SplitView>
        <div bind:this={viewport} slot="b" class="section viewport">
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
<div class="progress-wrapper">
    <div bind:this={progressbar} class="progress" />
</div>
<Modal />

<style lang="scss">
    .progress-wrapper {
        overflow: hidden;
        height: 8px;
        padding: 0 16px;
        box-sizing: border-box;
        position: relative;
    }
    .progress {
        position: absolute;
        box-sizing: border-box;
        display: block;
        content: ' ';
        height: 8px;
        border-radius: 20%;
        opacity: 0;
        left: 100%;
        width: 100%;
        background-image: linear-gradient(to right, var(--primary), var(--secondary), var(--primary));
        animation: bounce 2.2s ease-in-out;

        @keyframes bounce {
            0% {
                left: 0;
                width: 0%;
                opacity: 0;
            }

            45% {
                left: 0;
                opacity: 1;
                width: 50%;
            }

            90% {
                left: 100%;
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    }

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
        height: calc(100% - 12px);
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
