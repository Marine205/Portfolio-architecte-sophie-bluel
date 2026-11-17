//PROJETS//
// Récupération des éléments depuis le fichier JSON //
const reponse = await fetch("http://localhost:5678/api/works");
const projects = await reponse.json();

// Rattachement de nos balises au DOM //
const divGallery = document.querySelector(".gallery");

//boucle pour récupérér les projets et les afficher dans la galerie //
//foreach une méthode pour des objets tableaux Array//
projects.forEach((project) => {
  const figureElement = document.createElement("figure");
  figureElement.setAttribute("data-category", project.categoryId);

  const imageElement = document.createElement("img");
  imageElement.src = project.imageUrl;

  const nomElement = document.createElement("figcaption");
  nomElement.innerText = project.title;

  figureElement.appendChild(imageElement);
  figureElement.appendChild(nomElement);

  divGallery.appendChild(figureElement);
});

//Filtres//
//Récupération des éléments JSON//
const reponseFiltres = await fetch("http://localhost:5678/api/categories");
const categories = await reponseFiltres.json();

//Rattachement des boutons de filtre au DOM//
const divFilters = document.querySelector(".filters");

function filterCategory(categoryId) {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.classList.remove("active");
  });

  document.querySelector(`[data-filter="${categoryId}"]`).classList.add("active");
  document.querySelectorAll(`.gallery figure`).forEach((figure) => {
    if (categoryId === "all" || figure.getAttribute("data-category") === categoryId.toString()) {
      figure.style.display = "block";
    } else {
      figure.style.display = "none";
    }
  });
}
//boucle pour récupérer les catégories et les afficher dans les boutons de filtre//
categories.forEach((category) => {
  const buttonElement = document.createElement("button");

  buttonElement.classList.add("filter-btn");
  buttonElement.setAttribute("data-filter", category.id);
  buttonElement.innerText = category.name;

  divFilters.appendChild(buttonElement);
});
