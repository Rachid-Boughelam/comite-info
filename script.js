// === Fonctions utilitaires ===

// Retourne la date du jour au format français complet
function afficherDateDuJour() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const aujourdHui = new Date();
  document.getElementById('date-du-jour').textContent = `Nous sommes le ${aujourdHui.toLocaleDateString('fr-FR', options)}.`;
  return aujourdHui;
}

// Calcule et affiche les jours calendaires et ouvrés jusqu'à une date donnée
function afficherJoursRestants(dateFin, dateDebut = new Date()) {
  // Jours calendaires
  const diffTemps = dateFin.getTime() - dateDebut.getTime();
  const joursCalendaires = Math.ceil(diffTemps / (1000 * 3600 * 24));
  document.getElementById("jours-calendaires").textContent = joursCalendaires;

  // Jours ouvrés (lundi à vendredi)
  let joursOuvres = 0;
  let tempDate = new Date(dateDebut);
  while (tempDate <= dateFin) {
    const jour = tempDate.getDay();
    if (jour !== 0 && jour !== 6) joursOuvres++; // exclure samedi (6) et dimanche (0)
    tempDate.setDate(tempDate.getDate() + 1);
  }
  document.getElementById("jours-ouvres").textContent = joursOuvres;
}

// Active le bouton de test
function activerBouton() {
  const bouton = document.getElementById('clic');
  if (bouton) {
    bouton.addEventListener('click', () => {
      alert('Tu as cliqué ! 🎉');
    });
  }
}

// Active le toggle sur les sections
function activerToggle() {
  document.querySelectorAll('.toggle-title').forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      content.classList.toggle('hidden');
    });
  });
}

// === Initialisation ===
document.addEventListener('DOMContentLoaded', () => {
  const aujourdHui = afficherDateDuJour();
  const dateFin = new Date("2025-06-20");
  afficherJoursRestants(dateFin, aujourdHui);
  activerBouton();
  activerToggle();
});
