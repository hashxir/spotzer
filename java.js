const gazo = document.getElementById("haine")

var sound = document.getElementById("music");

var jefe = document.getElementById("jefe");

var vvs = document.getElementById("vvs");

var rick = document.getElementById("rickroll");

var selecao = document.getElementById("selecao");

var doubled = document.getElementById("doubled");

var fixette = document.getElementById("fixette");

var gallerie = document.getElementById("galerie");

var kiffance = document.getElementById("kiffance");

var heho = document.getElementById("heho");

var macarena = document.getElementById("macarena");

var espace = document.getElementById("macarena");

var espace = document.getElementById("espace");

var best = document.getElementById("best");

var suave = document.getElementById("suave");



gazo.addEventListener("click", () =>{
    var safe = confirm("Cette musique contient des mots violents, est-tu sur ?");

    if (safe = false) {
        sound.classList.add("safe");
    }

    else
    {
        sound.classList.remove("safe");
    };
    /*if (safe = true) {
    sound.classList.remove("safe");
    };*/
    
    
});

rick.addEventListener("ended", () => {
    selecao.play();
});

selecao.addEventListener("ended", () => {
    doubled.play();
});

doubled.addEventListener("ended", () => {
    fixette.play();
});

fixette.addEventListener("ended", () => {
    gallerie.play();
});

gallerie.addEventListener("ended", () => {
    jefe.play();
});

jefe.addEventListener("ended", () => {
    vvs.play();
});

vvs.addEventListener("ended", () => {
    kiffance.play();
});

gazo.addEventListener("ended", () => {
    heho.play();
});

kiffance.addEventListener("ended", () => {
    heho.play();
});

heho.addEventListener("ended", () => {
    macarena.play();
});

macarena.addEventListener("ended", () => {
    espace.play();
});

espace.addEventListener("ended", () => {
    best.play();
});

best.addEventListener("ended", () => {
    suave.play();
});

//fin de la boucle
suave.addEventListener("ended", () => {
    selecao.play();
});