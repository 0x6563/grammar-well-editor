import { Compile, Parse } from 'grammar-well';
import { BrowserImportResolver } from 'grammar-well/build/compiler/import-resolver';
import { Flatten } from 'grammar-well/build/utility/general';



onmessage = (e) => TestGrammar(e.data.grammar, e.data.input).then(v => postMessage(Clone(v)));

async function TestGrammar(grammar, input) {
    try {
        return { result: await GrammarWellRunner(grammar, input) };
    } catch (error) {
        console.log(error)
        return { error };
    }
}

function Clone(obj) {
    try {
        const o = Flatten(obj);
        return o;
    } catch (error) {
        console.log(error);
        return { error }
    }
}

async function GrammarWellRunner(source, input) {
    function Evalr(source) {
        const module = { exports: null };
        eval(source);
        return module.exports;
    }
    const compiled = await Compile(source, { exportName: 'grammar', resolverInstance: new BrowserImportResolver(self.location.origin) });
    return Parse(Evalr(compiled)(), input, { algorithm: 'earley' });
}

