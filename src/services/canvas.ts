export interface RectangleConfig {
    x: number;
    y: number;
    width: number;
    height: number;
    radius?: number | { tl?: number; tr?: number; bl?: number; br?: number };
    fill?: string;
    stroke?: string;
    shadow?: {
        x?: number;
        y?: number;
        blur?: number;
        color?: string;
    };
}

export function Rectangle(ctx: CanvasRenderingContext2D, config: RectangleConfig) {
    let { x, y, width, height, radius, fill, stroke, shadow } = config;
    ctx.save();

    const defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };

    ctx.fillStyle = fill || ctx.fillStyle;
    ctx.strokeStyle = stroke || ctx.strokeStyle;
    ctx.shadowColor = shadow?.color || ctx.shadowColor;
    ctx.shadowBlur = shadow?.blur || ctx.shadowBlur;
    ctx.shadowOffsetX = shadow?.x || ctx.shadowOffsetX;
    ctx.shadowOffsetY = shadow?.y || ctx.shadowOffsetY;

    radius = radius || 0
    radius = typeof radius == 'number' ? { tl: radius, tr: radius, br: radius, bl: radius } : { ...defaultRadius, ...radius };

    const cap = Math.min(height / 2, width / 2);
    for (const key in radius) {
        radius[key] = Math.min(radius[key], cap);
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();

    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }
    ctx.restore();
}

