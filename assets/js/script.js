// Je déclare la funtion clickup par l'evenement ONKEYUP  identifié dans le html

function clickUp()
{
  // je reprends les variables par l'id "firstname" identifié dans le html (template formulaire).value (valeur inserer par l'utilisateur)
  var firstname = document.getElementById('firstname').value;

  // Boite de dialogue : alert, confirm et prompt. Ici alert affichera le resultat via une boite de dialogue par la fonction clickUp déclencher par l'evenement onkeyup
  alert(firstname);
}
