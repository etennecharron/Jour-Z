
let chaptersObj = {
        chapitre1: {
                subtitle: "Le réveil",
                text: "Vous vous réveillez et commencez votre petite routine matinale. En même temps que vous vous habillez vous commencez à entendre des cris a l'extérieur de votre maison.",
                img: "assets/images/paysage_orange.jpg",
                option: [{ text: "Sortir dehors", action: "keyIsNotFound()" }]
        },
        chapitre2: {
                subtitle: "Chaos",
                text: "Vous voyez des gens s'enfuir des créatures ressemblant à des humains décomposés. La ville où vous connaissiez est devenus chaos et ceux qui ne courent pas assez vite se font manger vivant, il faut que vous trouviez une solution pour échapper aux créatures mangeuses de chaires qui hantent les rues.",
                img: "assets/images/zombies_mains.jpg",
                option: [{ text: "Courir vers voiture", action: "goToChapter(`chapitre3`)" },
                { text: "Courir dans la rue", action: "goToChapter(`chapitre2mort`)" },
                { text: "Retourner dans la maison", action: "goToChapter(`chapitre2p1`)" }]
        },
        chapitre2mort: {
                subtitle: "Mort dévoré",
                text: "Vous vous mettez à courir dans tous les sens comme tout le monde. Malheureusement pour vous, une des créatures court plus vite que vous et vous dévore.",
                img: "assets/images/crane_mort.jpg",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre2p1: {
                subtitle: "Recherche",
                text: "Vous retournez rapidement dans votre maison en espérant avoir ne pas avoir été vue par les créatures que vous devinez être des zombies. Vous fouillez un peu partout pour trouver des objets qui pourraient vous êtres utiles à votre survie.",
                img: "assets/images/clée.jpg",
                option: [{ text: "Suite", action: "keyIsFound()" }]
        },
        chapitre2p2: {
                subtitle: "Décision",
                text: "Finalement, vous avez rapidement réussi à trouver les clés de votre voiture et avez constaté que vous avez assez de nourriture pour survivre une semaine environ dans votre maison. Vous arrivez donc à la décision de rester pour survivre à l'apocalypse ou de partir.",
                img: "assets/images/maison.jpg",
                option: [{ text: "Rester", action: "goToChapter(`chapitre2p2mort`)" },
                { text: "Partir", action: "goToChapter(`chapitre3`)" }]
        },
        chapitre2p2mort: {
                subtitle: "Mort lente",
                text: "Quelques heures plus tard les zombies ont réalisé que vous vous cachez dans votre maison et ont commencé à rentrer par les fenêtres. Vous êtes malheureusement incapable de vous défendre contre autant de zombies et ils vous mangent tranquillement pendant que vous criez à l'aide.",
                img: "assets/images/crane_mort.jpg",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre3: {
                subtitle: "Voiture",
                text: "Vous assayer de rentrer dans votre voiture.",
                img: "assets/images/voiture.jpg",
                option: [{ text: "Avez-vous les clées?", action: "keyImpact()" }]
        },
        chapitre3mort: {
                subtitle: "Mort figée",
                text: "Vous courez vers votre voiture et vous tenter d'ouvrir la porte, malheureusement pour vous, vous n'avez pas la clé et vous restez figé de panique. Les monstres mangeurs de chair vous sautent dessus et vous arrachent les membres.",
                img: "assets/images/crane_mort.jpg",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre4: {
                subtitle: "Fuite",
                text: "Vous avez réussi à rentrer dans votre voiture et vous vous enfuyez des zombies qui sont dans la rue. Vous remarquez que votre ville au complet est remplie de zombie et que probablement que les villes voisines le sont aussi.",
                img: "assets/images/route.jpg",
                video: "assets/videos/voiture_roule.mp4",
                option: [{ text: "Suite", action: "goToChapter(`chapitre5`)" }]
        },
        chapitre5: {
                subtitle: "Destination",
                text: "Maintenant que vous êtes parties il vous reste à choisir une destination où aller!",
                img: "assets/images/signe_route.jpg",
                option: [{ text: "Sotire du pays", action: "goToChapter(`chapitre5mort`)" },
                { text: "Dépanneur", action: "goToChapter(`chapitre6`)" }]
        },
        chapitre5mort: {
                subtitle: "Mort en voiture",
                text: "Vous roulez quelques heures avant de réaliser que vous n'avez plus de gaz. Votre voiture arrête d'avancer au milieu de nulle part et vous ne savez pas où vous êtes. En sortant de votre voiture un zombie que vous n'aviez pas vu saute sur votre cou et vous arrache la tête. ",
                img: "assets/images/crane_mort.jpg",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre6: {
                subtitle: "Essence",
                text: "Vous êtes arrivé au dépanneur. Vous faites le plein d'essence et voler de la nourriture.",
                img: "assets/images/gas.jpg",
                option: [{ text: "Suite", action: "goToChapter(`chapitre7`)" }]
        },
        chapitre7: {
                subtitle: "Sauvetage",
                text: "Au moment que vous entrez dans votre voiture pour partir, une femme sortie de nulle part cours vers vous en criant à l'aide! Des hommes armés ressemblants à des bandits lui court après. Désirez-vous la sauver?",
                img: "assets/images/fuite.jpg",
                video: "assets/videos/femme_cours.mp4",
                option: [{ text: "Oui", action: "goToChapter(`chapitre8`)" },
                { text: "Non", action: "goToChapter(`chapitre7mort`)" }]
        },
        chapitre7mort: {
                subtitle: "Mort tiré",
                text: "Vous décidez de ne pas l'aider. En même temps que vous partez avec votre voiture vous regarder dans votre miroir et voyer la femme se faire tirer dessus par les bandits. Malheureusement pour vous, une balle perdue vous traverse la tête et vous mourez instantanément au volant de votre voiture.",
                img: "assets/images/crane_mort.jpg",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre8: {
                subtitle: "La morte",
                text: "Vous décidez de l'embarquer dans votre voiture! Après vous être enfui, vous réaliser que la femme que vous avez sauvée a été toucher et est en train de se vider de son sang. Avant de mourir, elle vous confit les coordonnés d'un refuge qui serait situé à gauche de la prochaine ville.",
                img: "assets/images/mort.jpg",
                option: [{ text: "Suite", action: "goToChapter(`chapitre9`)" }]
        },
        chapitre9: {
                subtitle: "Bandit",
                text: "Alors que vous vous dirigez vers la prochaine ville, des bandits vous coupent le chemin et vous demander de payer une taxe.",
                img: "assets/images/bandit.jpg",
                option: [{ text: "Accepter", action: "goToChapter(`chapitre10`)" },
                { text: "Refuser", action: "goToChapter(`chapitre9mort`)" }]
        },
        chapitre9mort: {
                subtitle: "Mort tué",
                text: "Vous refusez de payer la taxe. Les bandits furieux vous sors hors de votre voiture et vous fusille.",
                img: "assets/images/crane_mort.jpg",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre10: {
                subtitle: "Ville",
                text: "Vous avez accepté de payer la taxe. Les bandits vous ont pris toute votre nourriture mais au moins vous êtes enfin arrivé a la ville.",
                img: "assets/images/ville.jpg",
                option: [{ text: "suite", action: "goToChapter(`chapitre11`)" }]
        },
        chapitre11: {
                subtitle: "Direction?",
                text: "Maintenant arrivé, il faut maintenant vous souvenir de quel côté de la ville la base se situait pour la trouver.",
                img: "assets/images/direction.jpg",
                option: [{ text: "gauche", action: "goToChapter(`chapitre12`)" },
                { text: "droite", action: "goToChapter(`chapitre11mort`)" }]
        },
        chapitre11mort: {
                subtitle: "Mort perdus",
                text: "Vous tournez à droite et vous vous perdez. vous tournez sur un cul-de-sac mais des zombies vous empêchez de sortir. Les zombies réussissent à rentrer dans votre voiture et vous dévorent le haut du corps.",
                img: "assets/images/crane_mort.jpg",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre12: {
                subtitle: "Fin",
                text: "Vous avez tourné à gauche et vous avez réussi à trouver le refuge, félicitations!!",
                img: "assets/images/masque.jpg",
                video: "assets/videos/militaire_danse.mp4",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        }
}



let sonTransitionChapitre = new Audio("assets/audios/zombie_grogne.mp3")
let body = document.querySelector("body")
function goToChapter(chapterName) {
       console.log(body.classList)
       body.classList.remove(body.classList[0])
        body.classList.add(chapterName)
        localStorage.setItem("chapitre", chapterName)
        /*change le texte dans la page*/
        document.querySelector(".chapitre").innerHTML = chaptersObj[chapterName]["subtitle"];
        document.querySelector(".text").innerHTML = chaptersObj[chapterName]["text"];
        /*Fais apparaître les boutons et les fais fonctionner*/
        let choix = document.querySelector(".choix");
        choix.innerHTML = ""
        for (element of chaptersObj[chapterName]["option"]) {
                let btnChoix = document.createElement("button")
                let btnChoixContenus = document.createTextNode(element["text"])
                btnChoix.appendChild(btnChoixContenus)
                btnChoix.setAttribute("onclick", element["action"])
                btnChoix.setAttribute("type", "button")
                choix.appendChild(btnChoix)
        }
        console.log(chaptersObj[chapterName]["video"])

        if (chaptersObj[chapterName]["video"]) {
                document.querySelector(".imagechanger").innerHTML = `<video src="${chaptersObj[chapterName]["video"]}" class="image" loop>`
                document.querySelector(".image").play()
        }

        else {
                document.querySelector(".imagechanger").innerHTML = `<img src="${chaptersObj[chapterName]["img"]}" class="image">`
        }
/*son transition*/

        if (son == true) {
                sonTransitionChapitre.currentTime = 0;
                sonTransitionChapitre.play()
        }
        else {
                sonTransitionChapitre.currentTime = 0;
                sonTransitionChapitre.pause();
        }
};



keyFounded = false

function keyIsNotFound() {
        keyFounded = false
        goToChapter("chapitre2")
        localStorage.setItem("key", false)
}


function keyIsFound() {
        keyFounded = true
        goToChapter("chapitre2p2")
        localStorage.setItem("key", true)
}


function keyImpact() {
        if (keyFounded == true) {
                goToChapter("chapitre4")
        }
        if (keyFounded == false) {
                goToChapter("chapitre3mort")
        }
}

/*met la page au premier chapitre*/

/*4.2*/
document.addEventListener("DOMContentLoaded", function () {
        if (localStorage.getItem("key") == "true") {
                keyFounded = true;
        }
        else {
                keyFounded = false
        }
        if (localStorage.getItem("chapitre")) {
                goToChapter(localStorage.getItem("chapitre"))
        }
        else {
                goToChapter("chapitre1")
        }
});



/*******************5.1******************/

/**reset**/
function reset() {
        localStorage.clear();
        goToChapter("chapitre1")
}
let btnReset = document.querySelector(".reset")
btnReset.addEventListener("click", function () {
        reset()
})


/**sons**/
let son = true;
let checkboxSon = document.querySelector(".checkBoxSons")

checkboxSon.addEventListener("change", function () {
        if (checkboxSon.checked == false) {
                son = false;
        }
        else {
                son = true;
        }
        console.log("checkbox" + " " + checkboxSon.checked)
        console.log("son" + " " + son)
})