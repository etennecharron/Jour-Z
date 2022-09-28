
let chaptersObj = {
    chapitre1 : {
    subtitle : "Le réveil",
    text : "Vous vous réveiller" , 
    img : "paysage_orange",
    option:{option1: {text:"Sortire dehors", action:"goToChapter(`chapitre2`)"}}
    },
    chapitre2 : {
    subtitle : "Zombie rue",
    text : "Vous apercevez des zombies dans la rue" , 
    img : "zombies_mains.jpg",
    option:{option1: {text:"courir vers voiture", action:"goToChapter(`chapitre3`)"},
            option2:{text:"courir dans la rue", action:"goToChapter(`chapitre2mort`)"},
            option3:{text:"retourner dans la maison", action:"goToChapter(`chapitre2p1`)"}}
    },
    chapitre2mort : {
    subtitle : "Mort1",
    text : "Vous vous faites dévorer par des zombies" , 
    img : "crane_mort.avif",
    option:{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}
    },
    chapitre2p1 : {
    subtitle : "Recherche",
    text : "Chercher objets utile" , 
    img : "clée.jpg",
    option:{option1:{text:"suite", action:"goToChapter(`chapitre2p2`)"}}
    },
    chapitre2p2 : {
    subtitle : "Décision",
    text : "désirer vous rester ou partire" , 
    img : "maison.jpg",
    option:{option1:{text:"rester", action:"goToChapter(`chapitre2p2`)"},
            option2:{text:"partire", action:"goToChapter(`chapitre3`)"}}
    },
    chapitre2p2mort : {
    subtitle : "Mort2",
    text : "Les zombies rentre dans votre maison" , 
    img : "crane_mort.avif",
    option:{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}
    },
    chapitre3 : {
    subtitle : "Clée?",
    text : "Avez-vous les clées" , 
    img : "voiture.jpg",
    option:{option1:{text:"oui", action:"goToChapter(`chapitre4`)"},
            option2:{text:"non", action:"goToChapter(`chapitre3`)"}}
    },
    chapitre3mort : {
    subtitle : "Mort3",
    text : "Les zombies vous ratrappe et vous mange" , 
    img : "crane_mort.avif",
    option:{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}
    },
    chapitre4 : {
    subtitle : "Conduite",
    text : "Vous conduisez" , 
    img : "route.jpg",
    option:{option1:{text:"suite", action:"goToChapter(`chapitre5`)"}}
    },
    chapitre5 : {
    subtitle : "Destination",
    text : "choisisser où vous voulez allez" , 
    img : "signe_route.jpg",
    option:{option1:{text:"sotire du pays", action:"goToChapter(`chapitre5mort`)"},
            option2:{text:"dépanneur", action:"goToChapter(`chapitre6`)"}}
    },
    chapitre5mort : {
    subtitle : "Mort4",
    text : "Vous manquer de gaz et les zombies vous entoures, vous vous faite manger" , 
    img : "crane_mort.avif",
    option:{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}
    },
    chapitre6 : {
    subtitle : "Essence",
    text : "vous remplisser votre voiture avec de l'essence" , 
    img : "gas.jpg",
    option:{option1:{text:"suite", action:"goToChapter(`chapitre7`)"}}
    },
    chapitre7 : {
    subtitle : "Sauvetage",
    text : "Vous avez le choix de le sauver ou non" , 
    img : "fuite.jpg",
    option:{option1:{text:"oui", action:"goToChapter(`chapitre7`)"},
            option2:{text:"non", action:"goToChapter(`chapitre7mort`)"}}
    },
    chapitre7mort : {
    subtitle : "Mort5",
    text : "Vous ne savez plus où aller et finisser par vous faire ratrapper par les zombies" , 
    img : "crane_mort.avif",
    option:{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}
    },
    chapitre8 : {
    subtitle : "Un mort",
    text : "La personne meur quand même" , 
    img : "mort.jpg",
    option:{option1:{text:"suite", action:"goToChapter(`chapitre9`)"}}
    },
    chapitre9 : {
    subtitle : "Bandit",
    text : "Vous vous faites surprendre par des bandits" , 
    img : "bandit.jpg",
    option:{option1:{text:"donner", action:"goToChapter(`chapitre10`)"},
            option2:{text:"refuser de donner", action:"goToChapter(`chapitre9mort`)"}}
    },
    chapitre9mort : {
    subtitle : "Mort6",
    text : "Les bandits vous tue parce que vous n'avez pas partager", 
    img : "crane_mort.avif",
    option:{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}
    },
    chapitre10 : {
    subtitle : "Ville",
    text : "Vous arrivez à la ville" , 
    img : "ville.jpg",
    option:{option1:{text:"suite", action:"goToChapter(`chapitre11`)"}}
    },
    chapitre11 : {
    subtitle : "Direction?",
    text : "Quelle direction allez vous prendre" , 
    img : "direction.jpg",
    option:{option1:{text:"droite", action:"goToChapter(`chapitre12`)"},
            option2:{text:"gauche", action:"goToChapter(`chapitre11mort`)"}}
    },
    chapitre11mort : {
    subtitle : "Mort7",
    text : "Vous vous perdez, les zombies vous entoure et vous mange" , 
    img : "crane_mort.avif",
    option:{option:{text:"Recommencer", action:"goToChapter(`chapitre12`)"}}
    },
    chapitre12 : {
    subtitle : "Fin",
    text : "Vous êtes arriver a un refuge! bravo!!!" , 
    img : "masque.jpg",
    }
    } 
    
function goToChapter(chapterName){
console.log(chaptersObj[chapterName]["subtitle"]);
console.log(chaptersObj[chapterName]["text"]);};



