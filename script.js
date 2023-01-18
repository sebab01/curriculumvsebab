let menuVisible = false;
// Función que esconde o muestra el menú //
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Función que oculta el menú una vez seleccionada alguna seccion //
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función para aplicar progreso a las habilidades //
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("adobephotoshop");
        habilidades[3].classList.add("adobepremiere");
        habilidades[4].classList.add("pyhton");
        habilidades[5].classList.add("marketing");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("perfeccionista");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("community");
    }
}


// Animación de progreso
window.onscroll = function(){
    efectoHabilidades();
}