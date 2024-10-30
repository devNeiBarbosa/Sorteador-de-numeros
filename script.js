const minInput = document.getElementById("input-min");
const maxInput = document.getElementById("input-max");
const buttonSortear = document.getElementById("button-sortear");

    /*A função validateInputs é usada para verificar se os valores inseridos nos campos "min" e "max" 
    são válidos antes de habilitar o botão "Sortear".*/
      function validateInputs() {
        /*parseInt é útil para garantir que os valores de entrada (min e max) sejam tratados como 
        números inteiros, o que ajuda a evitar problemas de tipo durante os cálculos e comparações.*/
          const min = parseInt(minInput.value);
          const max = parseInt(maxInput.value);

          // Habilita o botão se min for menor que max e ambos estiverem preenchidos
          buttonSortear.disabled = isNaN(min) || isNaN(max) || min >= max;
          /* No caso do meu código, isNaN(min) || isNaN(max) verifica se os valores inseridos nos campos min e max 
          não são números (ou seja, se os campos estão vazios, contêm texto ou se o Max é menor ou igual ao Min), 
          evitando que o botão seja habilitado se as entradas não forem válidas. */
      }

//addEventListener = Evento de observação dos inputs, se os mesmos são validos ou não.
minInput.addEventListener("input", validateInputs);
maxInput.addEventListener("input", validateInputs);


function sortear() {
    //No meu código, Math.ceil(min) e Math.floor(max) são usados para garantir que os valores min e max sejam inteiros:
    // Math.ceil(min): Arredonda o valor mínimo para o próximo inteiro (caso min tenha parte decimal).
    const min = Math.ceil(document.querySelector("#input-min").value);
    //Math.floor(max): Arredonda o valor máximo para o menor inteiro (caso max tenha parte decimal).
    const max = Math.floor(document.querySelector("#input-max").value);


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