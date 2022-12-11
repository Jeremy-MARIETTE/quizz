json = [{

    "question": "JSON est t-il un language de programmation ?",
    "choix": ["oui", "non"],
    "reponse": 1,
    "remarque ": "JSON est un format de données textuel dérivé de la notation des objets du langage JavaScript"
}, {
    "question": "Javascript permet t-il de manipuler de DOM ?",
    "choix": ["oui", "non"],
    "reponse": 0,
    "remarque": "Il s’attache au nœud du DOM et peut agir en lecture et écriture."
}, {
    "question": "Javascript est-il un langage orienté objet ?",
    "choix": ["oui", "non"],
    "reponse": 0,
    "remarque": "Il permet de créer des classes qui seront instanciées en objets."
}, {
    "question": "JavaScript permet-il de faire des sauvegardes des données sur le disque dur client ?",
    "choix": ["oui", "non"],
    "reponse": 0,
    "remarque": "La fonction  localstorage permet d’ecrire les données de façon persistante sur le disque dur"
}, {
    "question": "Depuis Javascript ES6, pour la bonne pratique en matière de la déclaration des variables, doit-on continuer à utiliser var ?",
    "choix": ["oui", "non"],
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
        //	codeHTML+="<tr id=\"employee"+index+"\">";
        codeHTML += `<tr id="json${index}">`
        codeHTML += `<td>${item.question}</td>`;
        codeHTML += `<td>${item.choix[0]}</td>`;
        codeHTML += `<td>${item.choix[1]}</td>`;
        codeHTML += `<td></td>`;
        codeHTML += "</tr>"

        /** */
        codeHTML += `<label id="question" for="question"><h2>${item.question}</h2></label>`;

        codeHTML += `<<input class="reponse" type="button" value="${item.choix[0]}" onclick="reponse(1);">`;
        codeHTML += `<<input class="reponse" type="button" value="${item.choix[1]}" onclick="reponse(1);">`;

        codeHTML += `<textarea class="form-control" name="justify" id="" cols="100" rows="10" placeholder="Justifier votre réponse"></textarea>`;


        /** */


    });
    codeHTML += "</table>";
    console.log(codeHTML);

    document.getElementById('main').insertAdjacentHTML('afterbegin', codeHTML);
} //fin func