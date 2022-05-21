import { Compile, Parser } from 'grammar-well';
import { BrowserImportResolver } from 'grammar-well/build/compiler/import-resolver';
let current = {
    grammar: "",
    input: "",
    result: null
}

onmessage = async (e) => {
    if (current.grammar == e.data.grammar && current.input == e.data.input)
        return;
    current = e.data;
    const result = await TestGrammar(e.data.grammar, e.data.input);

    if (current.grammar == e.data.grammar && current.input == e.data.input) {
        current.result = result;
        postMessage(JSON.parse(JSON.stringify(current.result)));
    }
}

async function TestGrammar(grammar, input) {
    try {
        const g = await Compile(grammar, {
            resolverInstance: new BrowserImportResolver(self.location.origin)
        });
        if (current.grammar != grammar || current.input != current.input)
            return;
        const e = exports(g);
        const i = new Parser(e);
        return { result: i.run(input) };
    } catch (error) {
        return { error };
    }

}

function exports(source) {
    let module = { exports: '' }
    eval(source)
    return module.exports
}