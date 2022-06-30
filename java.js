const gazo = document.getElementById("haine")

var sound = document.getElementById("music");

var jefe = document.getElementById("jefe");

var vvs = document.getElementById("vvs");

var rick = document.getElementById("rickroll");

var selecao = document.getElementById("selecao");

var doubled = document.getElementById("doubled");

var fixette = document.getElementById("fixette");

var gallerie = document.getElementById("galerie");



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

