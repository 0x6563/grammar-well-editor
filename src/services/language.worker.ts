import { Compile } from 'grammar-well';
import { BrowserImportResolver } from 'grammar-well/build/compiler/import-resolver';
import { TransformLexer } from './gwell-monarch';



onmessage = (e) => TestGrammar(e.data.grammar).then(v => postMessage(v));

async function TestGrammar(grammar) {
    try {
        return { result: await GrammarWellRunner(grammar) };
    } catch (error) {
        console.log(error)
        return { result: null };
    }
}


async function GrammarWellRunner(source) {
    const compiled = await Compile(source, { resolverInstance: new BrowserImportResolver(self.location.origin), template: 'json' });
    const json = JSON.parse(compiled as string);
    return TransformLexer(json.state.lexer)
}

