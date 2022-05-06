import { Compile, Interpreter } from 'grammar-well';
onmessage = (e) => {
    const result = JSON.parse(JSON.stringify(TestGrammar(e.data.grammar, e.data.input)))
    postMessage(result);
}

function TestGrammar(grammar, input) {
    try {
        const g = Compile(grammar, {
            resolverInstance: {
                body: () => '',
                path: () => ''
            }
        });
        const e = exports(g);
        const i = new Interpreter(e);
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