//PROJETS//
// Récupération des éléments depuis le fichier JSON //
const reponse = await fetch("http://localhost:5678/api/works");
const projects = await reponse.json();

// Fonction qui génère les projets dans la galerie //
function generateProjects(projects) {
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
}

// Premier affichage de la page//
generateProjects(projects);

//Filtres//
//Récupération des éléments JSON//
const reponseFiltres = await fetch("http://localhost:5678/api/categories");
const categories = await reponseFiltres.json();

//Rattachement des boutons de filtre au DOM//
const divFilters = document.querySelector(".filters");

//boucle pour récupérer les catégories et les afficher dans les boutons de filtre//
categories.forEach((category) => {
  const buttonElement = document.createElement("button");

  buttonElement.classList.add("filter-btn");
  buttonElement.setAttribute("data-filter", category.id);
  buttonElement.innerText = category.name;

  divFilters.appendChild(buttonElement);
});

//Ajout du listener pour le filtrage des projets en fonction du bouton cliqué//
const button = document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const projectsFiltered = projects.filter(function (project) {
      if (button.dataset.filter == "all") {
        return true;
      }
      return project.categoryId == button.dataset.filter;
    });

    // Effacement de l'écran et regénération de la page avec les projets filtrés uniquement//
    document.querySelector(".gallery").innerHTML = "";
    generateProjects(projectsFiltered);
  });
});
