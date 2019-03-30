const doItButton = document.querySelector("#btn-doit");
const counterButton = document.querySelector("#btn-count");
const doItDisplayArea = document.querySelector("#display-area-doit");
const counterDisplayArea = document.querySelector("#display-area-count");
const importObject = { imports: { imported_func: arg => console.log(arg) } };

fetch('index.wasm').then(response =>
    response.arrayBuffer()
).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
).then(results => {
    const wasmExports = results.instance.exports;

    doItButton.onclick = ()=> {
        doItDisplayArea.innerText = wasmExports.MyCLanguageDoItFunction();
    }

    counterButton.onclick = ()=> {
        counterDisplayArea.innerText = wasmExports.MyCLanguageCounterFunction(1);
    }

}).catch(console.error);