const doItButton = document.querySelector("#btn-doit");
const counterButton = document.querySelector("#btn-count");
const doItDisplayElement = document.querySelector("#display-area-doit p");
const counterDisplayElement = document.querySelector("#display-area-count p");
const importObject = { imports: { imported_func: arg => console.log(arg) } };

fetch('index.wasm').then(response =>
    response.arrayBuffer()
).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
).then(results => {
    doItButton.onclick = ()=> {
        doItDisplayElement.innerText = results.instance.exports.MyCLanguageDoItFunction();
    }

    counterButton.onclick = ()=> {
        counterDisplayElement.innerText = results.instance.exports.MyCLanguageCounterFunction(1);
    }

}).catch(console.error);