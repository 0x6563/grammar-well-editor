<script context="module" lang="ts">
    import GrammarWellWorker from '@services/grammar-well.worker?worker';
    import LanguageWorker from '@services/language.worker?worker';
</script>

<script lang="ts">
    import type { languages } from 'monaco-editor';
    import { onMount } from 'svelte';
    import { debounceTime, Subject } from 'rxjs';
    import { Unflatten } from 'grammar-well/build/utility/general';

    import { WorkerPromise, type WorkerPromiseResult } from '@services/worker-runner';
    import { DefaultLanguage } from '@services/gwell-monarch';
    import { ResizeService } from '@services/resizing';

    import jsonGrammar from '@services/samples/json.grammar.txt?raw';
    import jsonSample from '@services/samples/json.sample.txt?raw';

    import simpleGrammar from '@services/samples/simple.grammar.txt?raw';
    import simpleSample from '@services/samples/simple.sample.txt?raw';
    
    import xmlGrammar from '@services/samples/xml.grammar.txt?raw';
    import xmlSample from '@services/samples/xml.sample.txt?raw';

    import grammarWellGrammar from 'grammar-well/src/grammars/gwell.gwell?raw';

    import Code from '@components/code.svelte';
    import Modal from '@components/modal.svelte';
    import SplitView from '@components/split-view.svelte';
    import Results from '@components/results.svelte';

    let grammar = localStorage.getItem('grammar') || jsonGrammar;
    let input = localStorage.getItem('input') || jsonSample;
    let runError = '';
    let results = [];
    let timings;
    let progressbar: HTMLElement;
    let tokensProvider: languages.IMonarchLanguage = DefaultLanguage;
    let grammarWorker: WorkerPromiseResult;

    const samples = {
        blank: {
            grammar: '',
            sample: '',
        },
        gwell: {
            grammar: grammarWellGrammar,
            sample: grammarWellGrammar,
        },
        json: {
            grammar: jsonGrammar,
            sample: jsonSample,
        },
        simple: {
            grammar: simpleGrammar,
            sample: simpleSample,
        },
        xml: {
            grammar: xmlGrammar,
            sample: xmlSample,
        },
    };
    const RunnerSub = new Subject<void>();
    const SyntaxSub = new Subject<void>();

    function OnSampleUpdate() {
        progressbar?.classList.add('pending');

        localStorage.setItem('grammar', grammar);
        localStorage.setItem('input', input);
        RunnerSub.next();
    }

    function OnGrammarUpdate() {
        OnSampleUpdate();
        SyntaxSub.next();
    }
    onMount(() => {
        SyntaxSub.pipe(debounceTime(2000)).subscribe(() => RunSyntax());
        RunnerSub.pipe(debounceTime(2000)).subscribe(() => RunGrammar());
        OnGrammarUpdate();
    });

    async function RunSyntax() {
        const { result } = await WorkerPromise(LanguageWorker, { grammar }).value;

        console.log(result);
        if (result) {
            tokensProvider = result;
        }
    }

    async function RunGrammar() {
        results = [];
        runError = '';
        if (grammarWorker) {
            grammarWorker.reject();
        }

        grammarWorker = WorkerPromise(GrammarWellWorker, { grammar, input });
        const { result, error, timings: b } = Unflatten(await grammarWorker.value);
        timings = b;
        progressbar?.classList.remove('pending');

        if (error) {
            runError = `Error: ` + (typeof error == 'string' ? error : JSON.stringify(error));
        }
        results = result?.results || [];
    }

    function LoadSample(s) {
        grammar = samples[s].grammar;
        input = samples[s].sample;
    }
</script>

<div class="sidebar">
    <a href="https://github.com/0x6563/grammar-well">Grammar Well</a> <a href="https://github.com/0x6563/grammar-well-editor">Live Editor</a>
    |
    <span class="space" />
    Load a sample:
    <button on:click={() => LoadSample('xml')}>XML</button>
    <button on:click={() => LoadSample('json')}>JSON</button>
    <button on:click={() => LoadSample('gwell')}>Grammar Well</button>
    <button on:click={() => LoadSample('simple')}>Simple Programming Language</button>
    <!-- <button class="material-icons" on:click={toggleTheme}>{theme}_mode</button> -->
</div>

<div class="wrapper">
    <SplitView on:resize={ResizeService.update} layout="row">
        <SplitView slot="a" on:resize={ResizeService.update} layout="stack">
            <div slot="a" class="section">
                <h2>Definition</h2>
                <div class="content">
                    <Code language="grammar-well" bind:value={grammar} width="fill" height="fill" on:edit={OnGrammarUpdate} />
                </div>
            </div>
            <div slot="b" class="section">
                <h2>Sample</h2>
                <div class="content">
                    <Code language="sample" bind:value={input} width="fill" height="fill" on:edit={OnSampleUpdate} {tokensProvider} />
                </div>
            </div>
        </SplitView>
        <div slot="b" class="section">
            <h2>Results</h2>
            <div class="content">
                {#if !runError}
                    <Results {results} />
                {:else}
                    <pre class="errors">{runError}</pre>
                {/if}
            </div>

            <div class="footer">
                {#if timings}
                    Compiled grammar in <b>{timings.compile.toFixed(2)} ms</b> Parsed sample in <b>{timings.parse.toFixed(2)} ms</b>
                {/if}
                <div class="progress-wrapper">
                    <div bind:this={progressbar} class="progress" />
                </div>
            </div>
        </div>
    </SplitView>
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
        border-radius: 50%;
        opacity: 1;
        left: 100%;
        width: 8px;
        background-image: linear-gradient(to right, var(--primary), var(--secondary), var(--primary));
        transition: all 2s;
        opacity: 0;
        &:global(.pending) {
            animation: bounce 2.2s ease-in-out infinite;
            opacity: 1;

            @keyframes bounce {
                0% {
                    left: 16px;
                    opacity: 1;
                }

                50% {
                    left: 15%;
                    opacity: 1;
                }

                100% {
                    left: 16px;
                    opacity: 1;
                }
            }
        }
    }

    .section {
        display: flex;
        flex-flow: column;
        height: 100%;

        h2 {
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
    .sidebar {
        width: 100%;
        height: 30px;

        line-height: 30px;
        padding: 0 20px;
    }
    .wrapper {
        position: absolute;
        left: 0;
        right: 0;
        top: 30px;
        bottom: 0;
        padding: 8px;
        box-sizing: border-box;
    }
    .errors {
        white-space: pre;
    }
    .footer {
        font-size: 0.75em;
        text-align: right;
    }
</style>
