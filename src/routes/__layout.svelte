<script lang="ts">
    import { Theme } from '@services/theme';
    import { onMount } from 'svelte';
    import '../app.scss';
    let app: HTMLElement;
    let theme: 'light' | 'dark' = 'dark';
    onMount(() => {
        toggleTheme();
    });
    function toggleTheme() {
        theme = theme == 'light' ? 'dark' : 'light';
        app.className = theme;
        Theme.set(theme);
    }
</script>

<div id="app" bind:this={app} class="light">
    <div id="swatch">
        <span class="background" />
        <span class="diffuse" />
        <span class="basic" />
        <span class="primary" />
        <span class="secondary" />
        <span class="warning" />
        <span class="positive" />
        <span class="negative" />
    </div>

    <div class="body">
        <slot />
    </div>

    <div class="footer">
        <a href="https://github.com/0x6563/" class="mark">&nbsp;</a>
        <div class="space" />
        <div class="title">Grammar Well Live Editor | <a href="https://github.com/0x6563/grammar-well">Grammar Well Repo</a> <a href="https://github.com/0x6563/grammar-well-editor">Editor Repo</a></div>
        <div class="space" />
        <button class="material-icons" on:click={toggleTheme}>{theme}_mode</button>
    </div>
</div>
