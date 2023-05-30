<script lang="ts">
    import { ModalService } from '@services/modal';
    import Tree from './tree.svelte';
    import Code from './code.svelte';

    export let result: any;
    let treeData: any;
    try {
        treeData = TraverseObject(result);
    } catch (e) {
        treeData = null;
    }
    interface A {
        rule: {
            name: string;
            symbols: (string | { token: string } | { literal: string })[];
        };
        data: C;
        meta: any;
    }
    interface B {
        type?: string | null;
        tag: any;
        value: string;
        text: string;
        offset: number;
        line: number;
        column: number;
        state: string;
    }
    type C = (A | B | C | null)[];

    interface ITree {
        name: string;
        data: (ITree | { value: string })[];
    }
    function TraverseObject(src: A | B): ITree {
        if ('rule' in src) {
            const { rule, data } = src;
            if (typeof rule.name != 'string' || !Array.isArray(data)) {
                throw 'Is Not Tree';
            }
            return {
                name: rule.name,
                data: TraverseArray(data),
            };
        }
    }
    function TraverseArray(src: C) {
        const data = [];
        for (let i = 0; i < src.length; i++) {
            const value = src[i];
            if (value == null) {
                continue;
            }
            if (Array.isArray(value)) {
                data.push(...TraverseArray(value));
            } else if ('rule' in value) {
                data.push(TraverseObject(value));
            } else if ('value' in value) {
                data.push({ value: value.value });
            } else {
                console.log('uNexecpted', value);
            }
        }
        return data;
    }
    function OpenDiagram() {
        console.log(treeData);
        ModalService.new(Tree, { tree: treeData });
    }
</script>

{#if treeData}
    <button class="material-icons text secondary" on:click={OpenDiagram}> account_tree </button>
{/if}

<Code language="grammar-well" value={JSON.stringify(result, null, 2)} width="fill" height="fill" settings={{ readOnly: true }} />

<style lang="scss">
</style>
