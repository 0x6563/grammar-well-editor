<script context="module" lang="ts">
    import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
    import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
    import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
    import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
    import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
</script>

<script lang="ts">
    import type { editor, Position, languages, CancellationToken, IRange } from 'monaco-editor';
    import { onMount, onDestroy, createEventDispatcher } from 'svelte';
    import { Theme } from '@services/theme';
    import { DefaultLanguage, GetMonarchLanguage } from '@services/gwell-monarch';
    import { ResizeService } from '@services/resizing';

    export let value = '';
    export let language = 'json';
    export let minHeight = 200;
    export let maxHeight = 0;
    export let minWidth = 600;
    export let maxWidth = 0;
    export let theme = 'vs-dark';
    export let width: 'fill' | 'auto' = 'fill';
    export let height: 'fill' | 'auto' = 'fill';
    export let settings: editor.IStandaloneEditorConstructionOptions = {};
    export let tokensProvider: languages.IMonarchLanguage = DefaultLanguage;

    let container: HTMLDivElement = null;
    const dispatch = createEventDispatcher();
    let codeEditor: editor.IStandaloneCodeEditor;
    let Monaco;
    $: {
        if (codeEditor && value != codeEditor.getValue()) {
            codeEditor.setValue(value);
            resize();
        }

        if (codeEditor) {
            Monaco.editor.setTheme(theme);
        }
    }
    $: {
        if (codeEditor) {
            Monaco.languages.setMonarchTokensProvider('sample', tokensProvider);
        }
    }
    Theme.subscribe((v) => (theme = v == 'light' ? 'vs-light' : 'vs-dark'));

    onMount(async () => {
        Monaco = await import('monaco-editor');

        const CustomLanguages: {
            [key: string]: {
                tokensProvider?: languages.IMonarchLanguage;
                completionItemProvider?: languages.CompletionItemProvider;
            };
        } = {
            'grammar-well': {
                tokensProvider: {
                    keywords: ['lexer', 'when'],
                    brackets: [
                        {
                            open: '{{',
                            close: '}}',
                            token: 'delimiter.curly',
                        },
                        {
                            open: '${',
                            close: '}',
                            token: 'delimiter.curly',
                        },
                        {
                            open: '{',
                            close: '}',
                            token: 'delimiter.curly',
                        },
                        {
                            open: '[',
                            close: ']',
                            token: 'delimiter.square',
                        },
                        {
                            open: '(',
                            close: ')',
                            token: 'delimiter.parenthesis',
                        },
                    ],
                    symbols: /->|\||\:\+|\:\*/,
                    operators: ['|', '->', ':*', ':+'],
                    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
                    ...GetMonarchLanguage(),
                },
            },
            mySpecialLanguage: {
                tokensProvider: {
                    tokenizer: {
                        root: [
                            {
                                include: '@whitespace',
                            },
                            [/[\{\}\(\)\[\]]/, '@brackets'],
                        ],

                        whitespace: [
                            [/[ \t\r\n]+/, 'white'],
                            [/\/\/.*$/, 'comment'],
                        ],
                    },
                },
                completionItemProvider: {
                    provideCompletionItems: (model: editor.ITextModel, position: Position, context: languages.CompletionContext, token: CancellationToken) => {
                        const word = model.getWordUntilPosition(position);
                        const range: IRange = {
                            startLineNumber: position.lineNumber,
                            endLineNumber: position.lineNumber,
                            startColumn: word.startColumn,
                            endColumn: word.endColumn,
                        };
                        const suggestions: languages.CompletionItem[] = [
                            {
                                label: 'simpleText',
                                kind: Monaco.languages.CompletionItemKind.Text,
                                insertText: 'simpleText',
                                range,
                            },
                            {
                                label: 'testing',
                                kind: Monaco.languages.CompletionItemKind.Keyword,
                                insertText: 'testing(${1:condition})',
                                insertTextRules: Monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                                range,
                            },
                            {
                                label: 'ifelse',
                                kind: Monaco.languages.CompletionItemKind.Snippet,
                                insertText: ['if (${1:condition}) {', '\t$0', '} else {', '\t', '}'].join('\n'),
                                insertTextRules: Monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                                documentation: 'If-Else Statement',
                                range,
                            },
                        ];
                        return { suggestions };
                    },
                },
            },
        };

        const CustomThemes: { [key: string]: editor.IStandaloneThemeData } = {
            myTHemes: {
                base: 'vs',
                inherit: false,
                rules: [
                    { token: 'custom-info', foreground: '808080' },
                    { token: 'custom-error', foreground: 'ff0000', fontStyle: 'bold' },
                    { token: 'custom-notice', foreground: 'FFA500' },
                    { token: 'custom-date', foreground: '008800' },
                ],
                colors: {
                    'editor.foreground': '#000000',
                },
            },
        };

        for (const id in CustomLanguages) {
            const { tokensProvider, completionItemProvider } = CustomLanguages[id];
            Monaco.languages.register({ id });
            if (tokensProvider) {
                Monaco.languages.setMonarchTokensProvider(id, tokensProvider);
            }
            if (completionItemProvider) {
                Monaco.languages.registerCompletionItemProvider(id, completionItemProvider);
            }
        }
        Monaco.languages.register({ id: 'sample' });
        Monaco.languages.setMonarchTokensProvider('sample', tokensProvider);

        for (const id in CustomThemes) {
            Monaco.editor.defineTheme(id, CustomThemes[id]);
        }

        (window as any).MonacoEnvironment = {
            getWorker(_, label) {
                if (label === 'json') {
                    return new jsonWorker();
                }
                if (label === 'css' || label === 'scss' || label === 'less') {
                    return new cssWorker();
                }
                if (label === 'html' || label === 'handlebars' || label === 'razor') {
                    return new htmlWorker();
                }
                if (label === 'typescript' || label === 'javascript') {
                    return new tsWorker();
                }
                return new editorWorker();
            },
        };

        codeEditor = Monaco.editor.create(container, {
            value,
            language,
            theme,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            ...settings,
        });

        resize();
        codeEditor.getModel().onDidChangeContent(() => {
            value = codeEditor.getValue();
            resize();
            dispatch('edit', value);
        });
        ResizeService.add(resize);
    });

    onDestroy(() => {
        if (codeEditor) {
            codeEditor.dispose();
            const model = codeEditor.getModel();
            if (model) model.dispose();
        }
        ResizeService.remove(resize);
    });

    function resize() {
        container.style.display = 'block';
        container.style.width = '100%';
        container.style.height = '100%';

        let targetWidth = container.offsetWidth;
        let targetHeight = container.offsetHeight;

        if (width == 'auto') {
            targetWidth = codeEditor.getContentWidth();
        }

        if (height == 'auto') {
            targetHeight = codeEditor.getContentHeight();
        }

        const newWidth = Math.max(minWidth, Math.min(maxWidth || targetWidth, targetWidth));
        const newHeight = Math.max(minHeight, Math.min(maxHeight || targetHeight, targetHeight));

        codeEditor.layout({ width: newWidth, height: newHeight });
        container.style.height = `${newHeight}px`;
        container.style.width = `${newWidth}px`;
    }
</script>

<div bind:this={container} class="editor" />

<style>
    .editor {
        height: 100%;
        width: 100%;
        position: relative;
    }
</style>
