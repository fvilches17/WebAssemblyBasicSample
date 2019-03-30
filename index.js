(async function() {
    const doItButton = document.querySelector("#btn-doit");
    const counterButton = document.querySelector("#btn-count");
    const doItDisplayArea = document.querySelector("#display-area-doit");
    const counterDisplayArea = document.querySelector("#display-area-count");
    const importObject = { imports: { imported_func: arg => console.log(arg) } };
    
    try {
        const response = await fetch("index.wasm");
        const bytes = await response.arrayBuffer();
        const results = await WebAssembly.instantiate(bytes, importObject);
        const wasmExports = results.instance.exports;
        
        doItButton.onclick = () => {
            doItDisplayArea.innerText = wasmExports.MyCLanguageDoItFunction();
        }
    
        counterButton.onclick = () => {
            counterDisplayArea.innerText = wasmExports.MyCLanguageCounterFunction(1);
        }    
    } catch (error) {
        console.error(error);
    }
})();