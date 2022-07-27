import { Compile, Parser } from 'grammar-well';
import { BrowserImportResolver } from 'grammar-well/build/compiler/import-resolver';


onmessage = (e) => TestGrammar(e.data.grammar, e.data.input).then(v => postMessage(Clone(v)));

async function TestGrammar(grammar, input) {
    try {
        const g = await Compile(grammar, {
            resolverInstance: new BrowserImportResolver(self.location.origin)
        });
        const e = exports(g);
        const i = new Parser(e);
        return { result: i.run(input) };
    } catch (error) {
        return { error };
    }
}

function exports(source) {
    let module = { exports: null }
    eval(source)
    return module.exports;
}

function Clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}