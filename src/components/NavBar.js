import React from 'react'

export const NavBar = () => {

    return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand col-lg-3 col-sm-4 col-6" href="#">
                        <img src="./images/calistoreuy_logo" alt="Logo CaliStoreUY" height="100%" width="100%" loading="lazy"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html" title="Página principal de Granate Studio">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="htmls/projects.html" title="Galería de obras y proyectos realizados">Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="htmls/studio.html" title="Descripción e información sobre el estudio">Estudio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="htmls/team.html" title="Conforamción e información de los integrantes de Granate Studio">Equipo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="htmls/services.html" title="Servicios prestados por Granate Studio">Servicios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="htmls/contact.html" title="Formulario de contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}