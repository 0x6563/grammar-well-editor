import { Style } from '@services/theme';

export class FlowChart {
    textBoxes: TextBox[] = [];
    lines: Line[] = [];
    paths: Path[] = [];
    constructor(
        private element: SVGElement
    ) {

    }
    addText(label: string, padding: number, x: number, y: number) {
        const text = new TextBox(this.element, label, padding, x, y);
        this.textBoxes.push(text);
        return text;
    }
    addLine(x1: number, y1: number, x2: number, y2: number) {
        const text = new Line(this.element, x1, y1, x2, y2);
        this.lines.push(text);
        return text;

    }
    addPath(x1: number, y1: number, x2: number, y2: number, stem: number) {
        const text = new Path(this.element, x1, y1, x2, y2, stem);
        this.paths.push(text);
        return text;
    }
}
export class TextBox {
    private rect: SVGRectElement;
    private textElement: SVGTextElement;
    private yOffset: number = 0;

    get x() { return this.rect.getBBox().x; }
    get y() { return this.rect.getBBox().y; }
    get width() { return this.rect.getBBox().width; }
    get height() { return this.rect.getBBox().height; }

    set x(x: number) {
        this.rect.setAttribute("x", x.toString());
        const { width: rWidth } = this.rect.getBBox();
        const { width: tWidth } = this.textElement.getBBox();
        this.textElement.setAttribute("x", (((rWidth - tWidth) / 2) + x).toString());
    }

    set y(y: number) {
        this.rect.setAttribute("y", y.toString());
        const { height: rHeight } = this.rect.getBBox();
        const { height: tHeight } = this.textElement.getBBox();
        this.textElement.setAttribute("y", (((rHeight - tHeight) / 2) + y + this.yOffset).toString());
    }

    set width(width: number) {
        this.rect.setAttribute("width", width.toString());
        this.x = this.x;
    }

    set height(height: number) {
        this.rect.setAttribute("height", height.toString());
        this.y = this.y;
    }

    get text() {
        return this.textElement.innerHTML.toString();
    }

    constructor(
        private svg: SVGElement,
        private label: string,
        padding: number = 0,
        startX: number = 0,
        startY: number = 0,
    ) {

        this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect.setAttribute('rx', "2");
        this.svg.appendChild(this.rect);
        this.textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
        this.textElement.innerHTML = label.replace(/\s/g, '\u00a0');
        this.svg.appendChild(this.textElement);

        const { y, width, height } = this.textElement.getBBox();
        this.width = width + (padding * 2);
        this.height = height + (padding * 2);
        this.yOffset = 0 - y;
        this.x = startX;
        this.y = startY;
    }
}

export class Line {
    private line: SVGLineElement;

    constructor(
        private svg: SVGElement,
        x1: number = 0,
        y1: number = 0,
        x2: number = 0,
        y2: number = 0
    ) {

        this.line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.svg.appendChild(this.line);
        this.line.setAttribute('x1', x1.toString());
        this.line.setAttribute('x2', x2.toString());
        this.line.setAttribute('y1', y1.toString());
        this.line.setAttribute('y2', y2.toString());
    }
}

export class Path {
    private path: SVGPathElement;

    constructor(
        private svg: SVGElement,
        x1: number = 0,
        y1: number = 0,
        x2: number = 0,
        y2: number = 0,
        stem: number = 0,
    ) {

        this.path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.svg.appendChild(this.path);
        this.path.setAttribute('fill', 'none');
        this.path.setAttribute('d', `M ${x1},${y1} v ${stem} H ${x2} V ${y2}`);

    }
}