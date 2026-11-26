document.addEventListener("DOMContentLoaded",function(){
    const barranavegacion = document.getElementById("barranavegacion");

    if(barranavegacion){
        barranavegacion.innerHTML=`<!--Barra de navegacion -->
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
        <!-- texto de la barra de navegacion a la izquierda -->
        <a class="navbar-brand" href="./index.html">Portafolio</a>

        <!-- Botón Hamburguesa ( para celulares) -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- ms-auto los empuja los enlaces hacia la derecha -->
        <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav ms-auto nav-pills">
                <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                <a class="nav-link" href="./html/sobre_mi.html">Sobre Mi</a>
                <a class="nav-link" href="./html/proyectos.html">Proyectos</a>
                <a class="nav-link" href="./html/contacto.html">Contacto</a>
            </div>
        </div>
    </div>
    </nav> <!--Fin barra de navegacion-->`;
    }
});