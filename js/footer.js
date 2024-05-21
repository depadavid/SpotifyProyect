class CustomFooter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('footer');
        wrapper.classList.add('footer');

        wrapper.innerHTML = `
            <div class="container-links-footer">
                <div class="links-footer">
                    <h3>Empresa</h3>
                    <a href="#">Acerca de</a>
                    <a href="#">Empleo</a>
                    <a href="#">For the Record</a>
                </div>
                <div class="links-footer">
                    <h3>Comunidades</h3>
                    <a href="#">Para artistas</a>
                    <a href="#">Desarrolladores</a>
                    <a href="#">Publicidad</a>
                    <a href="#">Inversores</a>
                    <a href="#">Proveedores</a>
                </div>
                <div class="links-footer">
                    <h3>Enlaces útiles</h3>
                    <a href="#">Asistencia</a>
                    <a href="#">App gratis para móvil</a>
                </div>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            .footer {
                grid-row: 3/4;
                grid-column: 2/-1;
                color: #fff;
                background-color: #121212;
                padding: 6rem 4rem;
                display: flex;
                flex-direction: column;
                gap: 5rem;
            }

            .container-links-footer {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #2a2a2a;
                padding-bottom: 5rem;
            }

            .links-footer {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                font-size: 1.6rem;
            }

            .links-footer a {
                text-decoration: none;
                color: #a7a7a7;
            }

            .links-footer a:hover {
                text-decoration: underline;
                color: #fff;
            }

            .social-icons {
                display: flex;
                gap: 2rem;
            }

            .container-icon {
                color: #fff;
                background-color: #292929;
                border-radius: 50%;
                width: 4.2rem;
                height: 4.2rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .container-icon:hover {
                background-color: #727272;
            }

            .container-icon i {
                font-size: 1.7rem;
            }

            .copyright p {
                color: #a7a7a7;
                font-size: 1.6rem;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

customElements.define('custom-footer', CustomFooter);