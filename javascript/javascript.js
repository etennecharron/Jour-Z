
let chaptersObj = {
        chapitre1: {
                subtitle: "Le réveil",
                text: "Vous vous réveillez et commencez votre petite routine matinal. En même temps que vous vous habillez vous commencez à entendre des cris a l'extérieur de votre maison.",
                img: "assets/images/paysage_orange.jpg",
                option: [{ text: "Sortire dehors", action: "keyIsNotFound()" }]
        },
        chapitre2: {
                subtitle: "Chaos",
                text: "Vous voyez des gens s'enfuire des créatures ressemblants à des humains décomposés. La ville que vous connaissiez est devenus chaos et ceux qui ne cours pas asser vite se font manger vivant, il faut que vous trouvez une solution pour échapper aux créatures mangeuses de chaires qui hantent les rues",
                img: "assets/images/zombies_mains.jpg",
                option: [{ text: "Courir vers voiture", action: "goToChapter(`chapitre3`)" },
                { text: "Courir dans la rue", action: "goToChapter(`chapitre2mort`)" },
                { text: "Retourner dans la maison", action: "goToChapter(`chapitre2p1`)" }]
        },
        chapitre2mort: {
                subtitle: "Mort dévoré",
                text: "Vous vous mettez à courir dans tous les sens comme tout le monde. Malhereusement pour vous, une des créatures cours plus vite que vous et vous dévore.",
                img: "assets/images/crane_mort.avif",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre2p1: {
                subtitle: "Recherche",
                text: "Vous retournez rapidement dans votre maison en espérant avoir ne pas avoir été vue par les créatures que vous devinez être des zombies. Vous fouillez un peu partout pour trouver des objets qui pourraient vous êtres utile à votre survie.",
                img: "assets/images/clée.jpg",
                option: [{ text: "Suite", action: "keyIsFound()" }]
        },
        chapitre2p2: {
                subtitle: "Décision",
                text: "Finalement, vous avez rapidement réussis à trouver les clés de votre voiture et avez constater que vous avez asser de nourriture pour survivre une semaine environ dans votre maison. Vous arrivez donc à la décision de sois partir de votre maison en voiture ou rester le plus longtemps possible dans votre maison pour survire à l'apocalipse.",
                img: "assets/images/maison.jpg",
                option: [{ text: "Rester", action: "goToChapter(`chapitre2p2mort`)" },
                { text: "Partir", action: "goToChapter(`chapitre3`)" }]
        },
        chapitre2p2mort: {
                subtitle: "Mort lente",
                text: "Quelque heures plus tard les zombies on réaliser que vous vous cachier dans votre maison et on commencer à rentrer par les fenêtres. Vous êtes malheureusement incapable de vous défendre contre autents de zombies et ils vous manges tranquillement pendant que vous criez à l'aide",
                img: "assets/images/crane_mort.avif",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre3: {
                subtitle: "Voiture",
                text: "Vous assayer de rentrer dans votre voiture",
                img: "assets/images/voiture.jpg",
                option: [{ text: "Avez-vous les clées?", action: "keyImpact()" }]
        },
        chapitre3mort: {
                subtitle: "Mort figée",
                text: "Vous courez vers votre voiture et vous tenter d'ouvir la porte, malheureusement pour vous vous n'avez pas la clée et vous rester figer de panique. Les monstres mangeur de chair vous saute dessus et vous arrache les membres.",
                img: "assets/images/crane_mort.avif",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre4: {
                subtitle: "Fuite",
                text: "Vous avez réssis à rentrer dans votre voiture et vous vous enfuiller des zombies qui sont dans la rue. Vous remarquez que votre ville au complet est remplis de zombie et que probablement que les villes voisines le sont aussi.",
                img: "assets/images/route.jpg",
                video: "assets/videos/voiture_roule.mp4",
                option: [{ text: "Suite", action: "goToChapter(`chapitre5`)" }]
        },
        chapitre5: {
                subtitle: "Destination",
                text: "Maintenant que vous êtes parties il vous reste a choisir une destination où aller!",
                img: "assets/images/signe_route.jpg",
                option: [{ text: "Sotire du pays", action: "goToChapter(`chapitre5mort`)" },
                { text: "Dépanneur", action: "goToChapter(`chapitre6`)" }]
        },
        chapitre5mort: {
                subtitle: "Mort en voiture",
                text: "Vous roulez quelque heures avant de réaliser que vous n'avez plus de gaz. Votre voiture arrête d'avancer au millieux de nul part et vous ne savez pas où vous êtes. En sortant de votre voiture un zombie que vous n'aviez pas vus saute sur votre cous et vous arrache la tête. ",
                img: "assets/images/crane_mort.avif",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre6: {
                subtitle: "Essence",
                text: "Vous avez décidez d'aller au dépanneur et vous y êtes arrivé. Vous faites le plein d'essence et voler de la nourriture",
                img: "assets/images/gas.jpg",
                option: [{ text: "Suite", action: "goToChapter(`chapitre7`)" }]
        },
        chapitre7: {
                subtitle: "Sauvetage",
                text: "Au moment que vous entrez dans votre voiture pour partire, une femme sortis de nul part cours vers vous en criant a l'aide! Des hommes armé ressemblant a des bandits lui cours après. Désirer vous la sauver?",
                img: "assets/images/fuite.jpg",
                video: "assets/videos/femme_cours.mp4",
                option: [{ text: "Oui", action: "goToChapter(`chapitre8`)" },
                { text: "Non", action: "goToChapter(`chapitre7mort`)" }]
        },
        chapitre7mort: {
                subtitle: "Mort tiré",
                text: "Vous décidez de ne pas l'aidé. En même temps que vous parter avec votre voiture vous regarder dans votre mirroir et voyer la femme se faire tirer dessus par les bandits. Malheureusement pour vous, une balle perdus vous traverse la têtes et vous mourez instentanément au volant de votre voiture.",
                img: "assets/images/crane_mort.avif",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre8: {
                subtitle: "Le mort",
                text: "Vous décidez de l'embarquer dans votre voiture!, vous voyez les balles défiller autours de vous en même temps que vous vous enfuyer. Après vous êtes enfuis, vous réaliser que la femme que vous avez sauvé a été toucher et est en trains de se vider de son sang. Avant de mourir, elle vous confis les coordoné d'un refuge qui serais situé a gauche de la prochaine ville dans votre itinéraire pour quitter le pays",
                img: "assets/images/mort.jpg",
                option: [{ text: "Suite", action: "goToChapter(`chapitre9`)" }]
        },
        chapitre9: {
                subtitle: "Bandit",
                text: "Alors que vous vous dirigez vers la prochaine ville, des bandits vous coupe le chemain et vous demander de payer une taxe ",
                img: "assets/images/bandit.jpg",
                option: [{ text: "Accepter", action: "goToChapter(`chapitre10`)" },
                { text: "Refuser", action: "goToChapter(`chapitre9mort`)" }]
        },
        chapitre9mort: {
                subtitle: "Mort tué",
                text: "Vous refusez de payer la taxe. Les bandits furieux, vous jètes hors de votre voiture et vous fusilles",
                img: "assets/images/crane_mort.avif",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre10: {
                subtitle: "Ville",
                text: "Vous avez accepté de payer la taxe. Les bandits vous ont pris toute votre nourriture mais au moins vous êtes enfin arrievé a la ville.",
                img: "assets/images/ville.jpg",
                option: [{ text: "suite", action: "goToChapter(`chapitre11`)" }]
        },
        chapitre11: {
                subtitle: "Direction?",
                text: "Maintenant arrivé, il faut maintenant vous souvenir de quelle coté de la ville la base se situais pour la trouvé.",
                img: "assets/images/direction.jpg",
                option: [{ text: "gauche", action: "goToChapter(`chapitre12`)" },
                { text: "droite", action: "goToChapter(`chapitre11mort`)" }]
        },
        chapitre11mort: {
                subtitle: "Mort perdus",
                text: "Vous tournez a droite et vous vous perdez. vous tournez sur un cul-de-sac et des zombies vous empêche de faire marche arrières. Les zombies réussis a rentrer dans votre voiture et vous dévore le haut du corp.",
                img: "assets/images/crane_mort.avif",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        },
        chapitre12: {
                subtitle: "Fin",
                text: "Vous avez tournez a gauche et vous avez réussis le refuge, félicitation!!!",
                img: "assets/images/masque.jpg",
                video: "assets/videos/militaire_danse.mp4",
                option: [{ text: "Recommencer", action: "goToChapter(`chapitre1`)" }]
        }
}


let sonTransitionChapitre = new Audio("assets/audios/zombie_grogne.mp3")

function goToChapter(chapterName) {
        localStorage.setItem("chapitre", chapterName)
        /*son de transion*/
        sonTransitionChapitre.play()
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

