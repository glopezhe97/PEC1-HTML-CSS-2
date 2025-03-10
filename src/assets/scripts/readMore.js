const buttonReadmore = document.getElementById("button-readmore");
const ingredientsList = document.querySelector(".ingredients-list");

buttonReadmore.addEventListener("click", () => {
    if (ingredientsList.style.maxHeight === '100px' || !ingredientsList.style.maxHeight) {
        ingredientsList.style.maxHeight = '1000px'; // Expande la lista (ajusta según lo necesites)
        buttonReadmore.textContent = 'Mostrar menos'; // Cambia el texto del botón
      } else {
        ingredientsList.style.maxHeight = '100px'; // Vuelve a ocultar los ingredientes
        buttonReadmore.textContent = 'Mostrar más'; // Cambia el texto del botón
      }})