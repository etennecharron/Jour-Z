
let chaptersObj = {
    chapitre1 : {
    subtitle : "Le réveil",
    text : "Vous vous réveiller" , 
    img : "assets/images/paysage_orange.jpg",
    option:[{option1: {text:"Sortire dehors", action:"goToChapter(`chapitre2`)"}}]
    },
    chapitre2 : {
    subtitle : "Zombie rue",
    text : "Vous apercevez des zombies dans la rue" , 
    img : "assets/images/zombies_mains.jpg",
    option:[{option1:{text:"courir vers voiture", action:"goToChapter(`chapitre3`)"},
            option2:{text:"courir dans la rue", action:"goToChapter(`chapitre2mort`)"},
            option3:{text:"retourner dans la maison", action:"goToChapter(`chapitre2p1`)"}}]
    },
    chapitre2mort : {
    subtitle : "Mort1",
    text : "Vous vous faites dévorer par des zombies" , 
    img : "assets/images/crane_mort.avif",
    option:[{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}]
    },
    chapitre2p1 : {
    subtitle : "Recherche",
    text : "Chercher objets utile" , 
    img : "assets/images/clée.jpg",
    option:[{option1:{text:"suite", action:"goToChapter(`chapitre2p2`)"}}]
    },
    chapitre2p2 : {
    subtitle : "Décision",
    text : "désirer vous rester ou partire" , 
    img : "assets/images/maison.jpg",
    option:[{option1:{text:"rester", action:"goToChapter(`chapitre2p2`)"},
            option2:{text:"partire", action:"goToChapter(`chapitre3`)"}}]
    },
    chapitre2p2mort : {
    subtitle : "Mort2",
    text : "Les zombies rentre dans votre maison" , 
    img : "assets/images/crane_mort.avif",
    option:[{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}]
    },
    chapitre3 : {
    subtitle : "Clée?",
    text : "Avez-vous les clées" , 
    img : "assets/images/voiture.jpg",
    option:[{option1:{text:"oui", action:"goToChapter(`chapitre4`)"},
            option2:{text:"non", action:"goToChapter(`chapitre3`)"}}]
    },
    chapitre3mort : {
    subtitle : "Mort3",
    text : "Les zombies vous ratrappe et vous mange" , 
    img : "assets/images/crane_mort.avif",
    option:[{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}]
    },
    chapitre4 : {
    subtitle : "Conduite",
    text : "Vous conduisez" , 
    img : "assets/images/route.jpg",
    option:[{option1:{text:"suite", action:"goToChapter(`chapitre5`)"}}]
    },
    chapitre5 : {
    subtitle : "Destination",
    text : "choisisser où vous voulez allez" , 
    img : "assets/images/signe_route.jpg",
    option:[{option1:{text:"sotire du pays", action:"goToChapter(`chapitre5mort`)"},
            option2:{text:"dépanneur", action:"goToChapter(`chapitre6`)"}}]
    },
    chapitre5mort : {
    subtitle : "Mort4",
    text : "Vous manquer de gaz et les zombies vous entoures, vous vous faite manger" , 
    img : "assets/images/crane_mort.avif",
    option:[{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}]
    },
    chapitre6 : {
    subtitle : "Essence",
    text : "vous remplisser votre voiture avec de l'essence" , 
    img : "assets/images/gas.jpg",
    option:[{option1:{text:"suite", action:"goToChapter(`chapitre7`)"}}]
    },
    chapitre7 : {
    subtitle : "Sauvetage",
    text : "Vous avez le choix de le sauver ou non" , 
    img : "assets/images/fuite.jpg",
    option:[{option1:{text:"oui", action:"goToChapter(`chapitre7`)"},
            option2:{text:"non", action:"goToChapter(`chapitre7mort`)"}}]
    },
    chapitre7mort : {
    subtitle : "Mort5",
    text : "Vous ne savez plus où aller et finisser par vous faire ratrapper par les zombies" , 
    img : "assets/images/crane_mort.avif",
    option:[{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}]
    },
    chapitre8 : {
    subtitle : "Un mort",
    text : "La personne meur quand même" , 
    img : "assets/images/mort.jpg",
    option:[{option1:{text:"suite", action:"goToChapter(`chapitre9`)"}}]
    },   
    chapitre9 : {
    subtitle : "Bandit",
    text : "Vous vous faites surprendre par des bandits" , 
    img : "assets/images/bandit.jpg",
    option:[{option1:{text:"donner", action:"goToChapter(`chapitre10`)"},
            option2:{text:"refuser de donner", action:"goToChapter(`chapitre9mort`)"}}]
    },
    chapitre9mort : {
    subtitle : "Mort6",
    text : "Les bandits vous tue parce que vous n'avez pas partager", 
    img : "assets/images/crane_mort.avif",
    option:[{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}]
    },
    chapitre10 : {
    subtitle : "Ville",
    text : "Vous arrivez à la ville" , 
    img : "assets/images/ville.jpg",
    option:[{option1:{text:"suite", action:"goToChapter(`chapitre11`)"}}]
    },
    chapitre11 : {
    subtitle : "Direction?",
    text : "Quelle direction allez vous prendre" , 
    img : "assets/images/direction.jpg",
    option:[{option1:{text:"droite", action:"goToChapter(`chapitre12`)"},
            option2:{text:"gauche", action:"goToChapter(`chapitre11mort`)"}}]
    },
    chapitre11mort : {
    subtitle : "Mort7",
    text : "Vous vous perdez, les zombies vous entoure et vous mange" , 
    img : "assets/images/crane_mort.avif",
    option:[{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}]
    },
    chapitre12 : {
    subtitle : "Fin",
    text : "Vous êtes arriver a un refuge! bravo!!!" ,  
    img : "assets/images/masque.jpg",
    option:[{option1:{text:"Recommencer", action:"goToChapter(`chapitre1`)"}}]
    }
    } 



function goToChapter(chapterName){ 
document.querySelector(".chapitre").innerHTML=chaptersObj[chapterName]["subtitle"];
document.querySelector(".text").innerHTML=chaptersObj[chapterName]["text"];
document.querySelector(".imagechanger").innerHTML= `<img src="${chaptersObj[chapterName]["img"]}" class="image">`
document.querySelector(".option1").innerHTML=chaptersObj[chapterName]["option"][0]["option1"]["text"];
document.querySelector(".option2").innerHTML=chaptersObj[chapterName]["option"][0]["option2"]["text"];
document.querySelector(".option3").innerHTML=chaptersObj[chapterName]["option"][0]["option3"]["text"];

function click2(){
chaptersObj[chapterName]["option"][0]["option2"]["action"];
};
function click3(){
chaptersObj[chapterName]["option"][0]["option3"]["action"];
};
};


function click1(chapterName){
chaptersObj[chapterName]["option"][0]["option1"]["action"];
};

