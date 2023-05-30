import gwl from 'grammar-well/src/grammars/gwell.json';
import type { languages } from 'monaco-editor';
export const DefaultLanguage: languages.IMonarchLanguage = { start: 'root', tokenizer: { root: [['.*', { token: 'source' }]] } };
export function GetMonarchLanguage() {
    const language = TransformLexer(gwl.state.lexer);
    language.tokenizer.js = [
        [/\$\{/, { token: 'tag', next: '@js_end', nextEmbedded: 'text/javascript' }],
    ];
    language.tokenizer.js_template = [
        [/\{\{/, { token: 'tag', next: '@js_template_end', nextEmbedded: 'text/javascript' }],
    ];
    language.tokenizer.js_end = [
        [/\}/, { token: 'tag', next: '@pop', nextEmbedded: '@pop' }],
    ];
    language.tokenizer.js_template_end = [
        [/\}\}/, { token: 'tag', next: '@pop', nextEmbedded: '@pop' }],
    ];
    return language;
}
export function TransformLexer(lexer) {
    const tokenizer: languages.IMonarchLanguage['tokenizer'] = {};
    const { start, states } = lexer;
    for (const key in states) {
        const { name, rules } = states[key];
        tokenizer[name] = [];
        for (const rule of rules) {
            if ('import' in rule) {
                for (const i of rule.import) {
                    tokenizer[name].push({ include: i })
                }
            } else if ('pop' in rule) {
                tokenizer[name].push([TransformWhen(rule.when), { token: rule.highlight || 'source', next: '@pop' }])
            } else if ('goto' in rule) {
                tokenizer[name].push([TransformWhen(rule.when), { token: rule.highlight || 'source', next: '@' + rule.goto }])
            } else if ('set' in rule) {
                tokenizer[name].push([TransformWhen(rule.when), { token: rule.highlight || 'source', switchTo: '@' + rule.set }])
            } else if ('inset' in rule) {
                tokenizer[name].push([TransformWhen(rule.when), { token: rule.highlight || 'source', next: '@push' }])
            } else if ('when' in rule) {
                tokenizer[name].push([TransformWhen(rule.when), { token: rule.highlight || 'source' }])
            }
        }
    }
    return { start, tokenizer };
}

function TransformWhen(obj) {
    return typeof obj == 'string' ? new RegExp(RegexEscape(obj)) : new RegExp(obj.regex, obj.flags);
}

function RegexEscape(string) {
    return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function JSONStringify(obj) {
    if (obj instanceof RegExp) {
        return obj.toString();
    } else if (Array.isArray(obj)) {
        return `[${obj.map(v => JSONStringify(v)).join(',')}]`;
    } else if (typeof obj == 'object') {
        return `{${Object.keys(obj).map(v => `${JSON.stringify(v)}:${JSONStringify(obj[v])}`).join(',')}}`;
    }
    return typeof obj == 'string' ? JSON.stringify(obj) : obj.toString();
};
