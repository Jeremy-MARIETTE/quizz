json = [{

    "question": "JSON est t-il un language de programmation ?",
    "choix": ["Vrai", "Faux"],
    "reponse": 1,
    "remarque ": "JSON est un format de données textuel dérivé de la notation des objets du langage JavaScript"
}, {
    "question": "Javascript permet t-il de manipuler de DOM ?",
    "choix": ["Vrai", "Faux"],
    "reponse": 0,
    "remarque": "Il s’attache au nœud du DOM et peut agir en lecture et écriture."
}, {
    "question": "Javascript est-il un langage orienté objet ?",
    "choix": ["Vrai", "Faux"],
    "reponse": 0,
    "remarque": "Il permet de créer des classes qui seront instanciées en objets."
}, {
    "question": "JavaScript permet-il de faire des sauvegardes des données sur le disque dur client ?",
    "choix": ["Vrai", "Faux"],
    "reponse": 0,
    "remarque": "La fonction  localstorage permet d’ecrire les données de façon persistante sur le disque dur"
}, {
    "question": "Depuis Javascript ES6, pour la bonne pratique en matière de la déclaration des variables, doit-on continuer à utiliser var ?",
    "choix": ["Vrai", "Faux"],
    "reponse": 1,
    "remarque": "Il faut utiliser let ou const pour mieux controler la portée des variables"


}]

document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        init();
    }
}
function remarque(id){
    alert("Modification CSS. "+id)

    var e = document.getElementById(id);
    e.style.visibility= 'visible';
}
function init() {
    let codeHTML = "<table>";

    json.forEach(function(item, index) {
        
    
        codeHTML += `<label id="question" for="question"><h2>${item.question}</h2>${index}</label>`;

        codeHTML += `<label class="choixReponse" for="choixV" onclick="myFunction(${index})">${item.choix[0]}</label>`;
        codeHTML += `<input class="reponse" id="choixV" type="radio" name="${index}" value="${item.choix[0]}" onclick="myFunction(${index})" >`;

        codeHTML += `<label class="choixReponse" for="choixF" onclick="myFunction(${index})">${item.choix[1]}</label>`;
        codeHTML += `<input class="reponse" id="choixF" type="radio" name="${index}" value="${item.choix[1]}" onclick="myFunction(${index})" >`;

        codeHTML += `<section id="remarque${index}">${item.remarque}</section>`;

    });
    codeHTML += "</table>";
    codeHTML +='<button class="bouton">Vérifier</button>';
    console.log(codeHTML);

    document.getElementById('main').insertAdjacentHTML('afterbegin', codeHTML);

} //fin func


function myFunction(id) {
    var x = document.getElementById("remarque"+id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }






