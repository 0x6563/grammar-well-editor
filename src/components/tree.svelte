<script lang="ts">
    import { FlowChart, TextBox } from '@services/svg';
    import { onMount } from 'svelte';
    let startX = 0;
    let startY = 0;
    let padding = 6;
    let spacing = 12;
    let rowHeight = 0;
    let maxX = 0;
    let maxY = 0;
    let element: SVGElement;
    let chart: FlowChart;
    interface ITree {
        name: string;
        textbox?: TextBox;
        row?: number;
        data: (ITree | { value: string; textbox?: TextBox; row?: number })[];
    }
    export let tree: ITree;
    $: {
        if (tree) run();
    }
    onMount(() => {
        chart = new FlowChart(element);
        run();
    });
    function run() {
        startX = 0;
        startY = 0;
        padding = 6;
        spacing = 12;
        rowHeight = 0;
        maxX = 0;
        maxY = 0;
        try {
            if (element) {
                element.innerHTML = '';

                if (tree) {
                    Traverse(JSON.parse(JSON.stringify(tree)));
                }
                element.setAttribute('width', `${maxX}px`);
                element.setAttribute('height', `${maxY}px`);
                element.setAttribute('viewbox', `0 0 ${maxX} ${maxY}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function Traverse(tree: ITree, state: IMap = { rows: [[]], symMap: {} }) {
        tree.row = tree.row || 0;
        tree.textbox = chart.addText(tree.name, padding, startX, startY);
        rowHeight = rowHeight || tree.textbox.height * 2;

        if (!tree.data.length) {
            tree.data.push({ value: '' });
        }
        for (const child of tree.data) {
            if ('data' in child) {
                Traverse(child, state);
                tree.row = tree.row < child.row ? child.row : tree.row;
            } else if ('value' in child) {
                const prev = state.rows[0][state.rows[0].length - 1] || { x: 0, width: 0 };
                child.textbox = chart.addText(child.value, padding, startX, startY);
                child.textbox.x = prev.x + prev.width + spacing;
                maxX = Math.max(maxX, child.textbox.x + child.textbox.width + spacing);
                child.row = 0;
                state.rows[0].push(child.textbox);
            }
        }
        tree.row++;
        state.rows[tree.row] = state.rows[tree.row] || [];
        tree.textbox.y = tree.row * rowHeight;
        maxY = Math.max(maxY, tree.textbox.y + tree.textbox.height + spacing);

        const first = tree.data[0].textbox;
        const last = tree.data[tree.data.length - 1].textbox;
        tree.textbox.x = first.x + (last.x + last.width - first.x) / 2 - tree.textbox.width / 2;
        const row = state.rows[tree.row];
        const prev = row[row.length - 1];
        if (prev) {
            const min = prev.x + prev.width + spacing - tree.textbox.x;
            if (min > 0) {
                ShiftNodes(tree, min, 0);
            }
        }
        DrawLine(tree.textbox, first, last);
        state.rows[tree.row].push(tree.textbox);
        tree.row = tree.row;
        return state;
    }

    function DrawLine(parent: TextBox, child1: TextBox, child2: TextBox) {
        chart.addPath(parent.x + parent.width / 2, parent.y, child1.x + child1.width / 2, child1.y + child1.height, rowHeight / -4);
        if (child1 != child2) {
            chart.addPath(parent.x + parent.width / 2, parent.y, child2.x + child2.width / 2, child2.y + child2.height, rowHeight / -4);
        }
    }
    function ShiftNodes(tree: ITree, x: number, y: number) {
        ShiftNode(tree.textbox, x, y);
        for (const child of tree.data) {
            if ('data' in child) {
                ShiftNodes(child, x, y);
            } else if ('value' in child) {
                ShiftNode(child.textbox, x, y);
            }
        }
    }
    function ShiftNode(node: TextBox, x: number, y: number) {
        if (x) {
            node.x = node.x + x;
        }
        if (y) {
            node.y = node.y + y;
        }

        maxX = Math.max(maxX, node.x + node.width + spacing);
        maxY = Math.max(maxY, node.y + node.height + spacing);
    }
    interface IMap {
        rows: TextBox[][];
        symMap: {};
    }
</script>

<svg bind:this={element} />

<style lang="scss">
    svg {
        background: var(--background);
    }
</style>
