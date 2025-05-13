// ========== Affiche la date du jour ==========
function afficherDateDuJour() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const aujourdHui = new Date();
  const elt = document.getElementById('date-du-jour');
  if (elt) elt.textContent = `Nous sommes le ${aujourdHui.toLocaleDateString('fr-FR', options)}.`;
  return aujourdHui;
}

// ========== Calcule et affiche les jours restants ==========
function afficherJoursRestants(dateFin, dateDebut = new Date()) {
  const diffTemps = dateFin.getTime() - dateDebut.getTime();
  const joursCalendaires = Math.ceil(diffTemps / (1000 * 3600 * 24));

  const eltJourCal = document.getElementById("jours-calendaires");
  const eltJourOuv = document.getElementById("jours-ouvres");

  if (eltJourCal) eltJourCal.textContent = joursCalendaires;

  // Calcul des jours ouvrés
  let joursOuvres = 0;
  const tempDate = new Date(dateDebut);
  while (tempDate <= dateFin) {
    const jour = tempDate.getDay();
    if (jour !== 0 && jour !== 6) joursOuvres++; // Exclut samedi (6) et dimanche (0)
    tempDate.setDate(tempDate.getDate() + 1);
  }
  if (eltJourOuv) eltJourOuv.textContent = joursOuvres;
}

// ========== Active le bouton d'alerte ==========
function activerBouton() {
  const bouton = document.getElementById('clic');
  if (bouton) {
    bouton.addEventListener('click', () => {
      alert('Tu as cliqué ! 🎉');
    });
  }
}

// ========== Active les titres cliquables (toggle) ==========
function activerToggle() {
  document.querySelectorAll('.toggle-title').forEach(title => {
    title.addEventListener('click', () => {
      title.classList.toggle('active');
      const content = title.nextElementSibling;
      if (content) {
        content.classList.toggle('hidden');
      }
    });
  });

  document.querySelectorAll('.sub-toggle-title').forEach(title => {
    title.addEventListener('click', () => {
      title.classList.toggle('active');
      const content = title.nextElementSibling;
      if (content) {
        content.classList.toggle('hidden');
      }
    });
  });
}

// ========== Initialisation au chargement de la page ==========
document.addEventListener('DOMContentLoaded', () => {
  const aujourdHui = afficherDateDuJour();
  const dateFin = new Date("2025-06-20");
  afficherJoursRestants(dateFin, aujourdHui);
  activerBouton();
  activerToggle();
});
