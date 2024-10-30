function sortear() {

    /* as seguintes informações:
    min = Math.ceil(min);
    max = Math.floor(max);
    Math.floor(Math.random() * (max - min + 1)) + min;
    
    foram retiradas do site: 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    */

    const min = Math.ceil(document.querySelector("#input-min").value)
    const max = Math.floor(document.querySelector("#input-max").value)

    // Exibe o loading
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        //Calcula o número sorteado
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        // Oculta o loading
        document.getElementById("loading").classList.add("hidden");

        // Exibe o resultado
        document.querySelector("#result").value = result;
    }, 500); //500ms = 0.5 segundos de atraso


}