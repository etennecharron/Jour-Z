
let chaptersObj = {
        chapitre1 : {
        subtitle : "Le réveil",
        text : "Vous vous réveiller et comencer votre petite routine matinal. En même temps que vous vous habiller vous commencer à entendre des cris a l'exterieur de votre maison." , 
        img : "assets/images/paysage_orange.jpg",
        option:[{text:"Sortire dehors", action:"keyIsNotFound()"}]
        },
        chapitre2 : {
        subtitle : "Zombie rue",
        text : "Vous voyez des gens s'enfuire des créatues ressemblants a des humains décomposer. La ville que vous connaissier est devenus chaos et ceux qui ne cours pas asser vite se font manger vivant, il faut que vous trouvez une solution pour échapper aux créature mangeuses de chaires qui hante les rues" , 
        img : "assets/images/zombies_mains.jpg",
        option:[{text:"courir vers voiture", action:"goToChapter(`chapitre3`)"},
                {text:"courir dans la rue", action:"goToChapter(`chapitre2mort`)"},
                {text:"retourner dans la maison", action:"goToChapter(`chapitre2p1`)"}]
        },
        chapitre2mort : {
        subtitle : "Mort1",
        text : "Vous vous mettez a courir dans tous les senses comme tous le monde. Malhereusement pour vous, une des créatures cours plus vite que vous et vous dévore." , 
        img : "assets/images/crane_mort.avif",
        option:[{text:"Recommencer", action:"goToChapter(`chapitre1`)"}]
        },
        chapitre2p1 : {
        subtitle : "Recherche",
        text : "Chercher objets utile" , 
        img : "assets/images/clée.jpg",
        option:[{text:"suite", action:"keyIsFound()"}]
        },
        chapitre2p2 : {
        subtitle : "Décision",
        text : "désirer vous rester ou partire" , 
        img : "assets/images/maison.jpg",
        option:[{text:"rester", action:"goToChapter(`chapitre2p2mort`)"},
                {text:"partire", action:"goToChapter(`chapitre3`)"}]
        },
        chapitre2p2mort : {
        subtitle : "Mort2",
        text : "Les zombies rentre dans votre maison" , 
        img : "assets/images/crane_mort.avif",
        option:[{text:"Recommencer", action:"goToChapter(`chapitre1`)"}]
        },
        chapitre3 : {
        subtitle : "Clée?",
        text : "Vous assayer de rentrer dans votre voiture" , 
        img : "assets/images/voiture.jpg",
        option:[{text:"Avez-vous les clées?", action:"keyImpact()"}]
        },
        chapitre3mort : {
        subtitle : "Mort3",
        text : "Les zombies vous ratrappe et vous mange" , 
        img : "assets/images/crane_mort.avif",
        option:[{text:"Recommencer", action:"goToChapter(`chapitre1`)"}]
        },
        chapitre4 : {
        subtitle : "Conduite",
        text : "Vous conduisez" , 
        img : "assets/images/route.jpg",
        option:[{text:"suite", action:"goToChapter(`chapitre5`)"}]
        },
        chapitre5 : {
        subtitle : "Destination",
        text : "choisisser où vous voulez allez" , 
        img : "assets/images/signe_route.jpg",
        option:[{text:"sotire du pays", action:"goToChapter(`chapitre5mort`)"},
                {text:"dépanneur", action:"goToChapter(`chapitre6`)"}]
        },
        chapitre5mort : {
        subtitle : "Mort4",
        text : "Vous manquer de gaz et les zombies vous entoures, vous vous faite manger" , 
        img : "assets/images/crane_mort.avif",
        option:[{text:"Recommencer", action:"goToChapter(`chapitre1`)"}]
        },
        chapitre6 : {
        subtitle : "Essence",
        text : "vous remplisser votre voiture avec de l'essence" , 
        img : "assets/images/gas.jpg",
        option:[{text:"suite", action:"goToChapter(`chapitre7`)"}]
        },
        chapitre7 : {
        subtitle : "Sauvetage",
        text : "Vous avez le choix de le sauver ou non" , 
        img : "assets/images/fuite.jpg",
        option:[{text:"oui", action:"goToChapter(`chapitre8`)"},
                {text:"non", action:"goToChapter(`chapitre7mort`)"}]
        },
        chapitre7mort : {
        subtitle : "Mort5",
        text : "Vous ne savez plus où aller et finisser par vous faire ratrapper par les zombies" , 
        img : "assets/images/crane_mort.avif",
        option:[{text:"Recommencer", action:"goToChapter(`chapitre1`)"}]
        },
        chapitre8 : {
        subtitle : "Un mort",
        text : "La personne meur quand même" , 
        img : "assets/images/mort.jpg",
        option:[{text:"suite", action:"goToChapter(`chapitre9`)"}]
        },   
        chapitre9 : {
        subtitle : "Bandit",
        text : "Vous vous faites surprendre par des bandits" , 
        img : "assets/images/bandit.jpg",
        option:[{text:"donner", action:"goToChapter(`chapitre10`)"},
                {text:"refuser de donner", action:"goToChapter(`chapitre9mort`)"}]
        },
        chapitre9mort : {
        subtitle : "Mort6",
        text : "Les bandits vous tue parce que vous n'avez pas partager", 
        img : "assets/images/crane_mort.avif",
        option:[{text:"Recommencer", action:"goToChapter(`chapitre1`)"}]
        },
        chapitre10 : {
        subtitle : "Ville",
        text : "Vous arrivez à la ville" , 
        img : "assets/images/ville.jpg",
        option:[{text:"suite", action:"goToChapter(`chapitre11`)"}]
        },
        chapitre11 : {
        subtitle : "Direction?",
        text : "Quelle direction allez vous prendre" , 
        img : "assets/images/direction.jpg",
        option:[{text:"gauche", action:"goToChapter(`chapitre12`)"},
                {text:"droite", action:"goToChapter(`chapitre11mort`)"}]
        },
        chapitre11mort : {
        subtitle : "Mort7",
        text : "Vous vous perdez, les zombies vous entoure et vous mange" , 
        img : "assets/images/crane_mort.avif",
        option:[{text:"Recommencer", action:"goToChapter(`chapitre1`)"}]
        },
        chapitre12 : {
        subtitle : "Fin",
        text : "Vous êtes arriver a un refuge! bravo!!!" ,  
        img : "assets/images/masque.jpg",
        option:[{text:"Recommencer", action:"goToChapter(`chapitre1`)"}]
        }
        } 
    
    
    
    function goToChapter(chapterName){ 
    /*change le texte dans la page*/    
    document.querySelector(".chapitre").innerHTML=chaptersObj[chapterName]["subtitle"];
    document.querySelector(".text").innerHTML=chaptersObj[chapterName]["text"];
    /*change image*/
    document.querySelector(".imagechanger").innerHTML= `<img src="${chaptersObj[chapterName]["img"]}" class="image">`
    /*Fais apparaître les boutons et les fais fonctionner*/ 
    let choix = document.querySelector(".choix");
    choix.innerHTML = ""
    for(element of chaptersObj[chapterName]["option"]){
            let btnChoix = document.createElement("button")
            let btnChoixContenus = document.createTextNode(element["text"])
            btnChoix.appendChild(btnChoixContenus)
            btnChoix.setAttribute("onclick",element["action"])
            btnChoix.setAttribute("type","button")
            choix.appendChild(btnChoix)
    }
    };
    

    keyFounded = false
    function keyIsNotFound(){
        keyFounded = false
        goToChapter("chapitre2")
    }
    function keyIsFound(){
            keyFounded = true
            goToChapter("chapitre2p2")
    }
    function keyImpact(){
    if(keyFounded == true){
            goToChapter("chapitre4")
    }
    if(keyFounded == false){
            goToChapter("chapitre3mort")
    }
    }




    /*met la page au premier chapitre*/
    goToChapter("chapitre1")