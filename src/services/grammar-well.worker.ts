import { Compile, Parse } from 'grammar-well';
import { BrowserImportResolver } from 'grammar-well/build/compiler/import-resolver';
import { Flatten } from 'grammar-well/build/utility/general';



onmessage = (e) => TestGrammar(e.data.grammar, e.data.input);

async function TestGrammar(grammar, input) {
    let response;
    try {
        response = await GrammarWellRunner(grammar, input);
    } catch (error) {
        console.log(error)
        response = { error: error.toString() };
    }
    postMessage(Clone(response));
}

function Clone(obj) {
    try {
        const o = Flatten(obj);
        return o;
    } catch (error) {
        console.log(error);
        return { error: error.toString() }
    }
}

async function GrammarWellRunner(source, input) {
    function Evalr(source) {
        const module = { exports: null };
        eval(source);
        return module.exports;
    }
    const response: any = { timings: {} };
    const compileStart = performance.now();
    const compiled = await Compile(source, { exportName: 'grammar', resolverInstance: new BrowserImportResolver(self.location.origin) });
    const compileEnd = performance.now();
    response.timings.compile = compileEnd - compileStart;

    response.result = Parse(Evalr(compiled)(), input, { algorithm: 'earley' });
    response.timings.parse = performance.now() - compileEnd;
    return response;
}

