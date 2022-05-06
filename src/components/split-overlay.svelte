<div class="container">
    <div class="split">
        <div class="item">
            <slot name="left" />
        </div>
        <div class="item">
            <slot name="right" />
        </div>
    </div>
    <div class="preview">
        <div class="inner">
            <slot name="preview" />
        </div>
    </div>
</div>

<style lang="scss">
    .container {
        position: relative;
        width: 100%;
        height: 100%;
        .split {
            width: 100%;
            height: 100%;
            display: flex;
            .item {
                width: 100%;
                height: 100%;
            }
        }
        .preview {
            position: absolute;
            display: flex;
            pointer-events: none;
            background: #fff;
            opacity: 0.2;
            bottom: 0;
            left: 0;
            right: 0;
            & > * {
                pointer-events: none !important;
            }
            justify-content: center;
        }
    }
</style>
