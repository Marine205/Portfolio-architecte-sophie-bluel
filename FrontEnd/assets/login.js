// ajout d'un listener sur le bouton submit du formulaire login//
export function ajoutListenerSeConnecter() {
  const loginForm = document.querySelector(".login-form");
  loginForm.addEventListener("submit", async function (event) {
    // Désactivation du comportement par défaut du navigateur
    event.preventDefault();
    const data = new FormData(event.target);

    //création de l'objet avec les valeurs des balises html pour le login //
    const login = {
      email: data.get("email"),
      password: data.get("password"),
    };
    //Création de la charge utile, transformation de l'email+password en JSON //
    const chargeUtile = JSON.stringify(login);

    //fonction fetch pour l'envoi de la requête au backend//
    const response = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: chargeUtile,
    });
  });
}
ajoutListenerSeConnecter();
