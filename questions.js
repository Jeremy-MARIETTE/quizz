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

function init() {
    let codeHTML = "<table>";

    json.forEach(function(item, index) {
        
        codeHTML += `<tr id="json${index}">`
        codeHTML += `<td>${item.question}</td>`;
        codeHTML += `<td>${item.choix[0]}</td>`;
        codeHTML += `<td>${item.choix[1]}</td>`;
        codeHTML += `<td></td>`;
        codeHTML += "</tr>"

      
        codeHTML += `<label id="question" for="question"><h2>${item.question}</h2></label>`;

        codeHTML += `<input class="reponse" type="button" value="${item.choix[0]}" onclick="reponse(1);">`;
        codeHTML += `<input class="reponse" type="button" value="${item.choix[1]}" onclick="reponse(1);">`;

        codeHTML += `<section>${item.remarque}</section>`;

    });
    codeHTML += "</table>";
    codeHTML +='<button class="bouton">Vérifier</button>';
    console.log(codeHTML);

    document.getElementById('main').insertAdjacentHTML('afterbegin', codeHTML);
} //fin func


/* ----------- AJOUT A MODIFIER ------------- */

/* Affichage première question */
document.getElementById("question").innerHTML = json[0].question;

/* Initialisation des scores et compteur de questions */
document.getElementById("score").innerHTML = 0;
document.getElementById("number_questions").innerHTML = 1;

/* Fonction réponse */

function reponse (bouton){
    
    i = 0;

   let reponse = json[i].reponse;

        if (bouton == reponse){
            document.getElementById("question").innerHTML = json[i+1].question;
            reponse = json[i+1].reponse;

            /* incrémentation du score + compteur de question => mettre limite ! */
           document.getElementById("score").innerHTML ++;
           document.getElementById("number_questions").innerHTML ++;
        }

        else {
            document.getElementById("question").innerHTML = json[i+1].question;
            reponse = json[i+1].reponse;

            /* Incrémentation du compteur de question */
            document.getElementById("number_questions").innerHTML ++;
        }

}





