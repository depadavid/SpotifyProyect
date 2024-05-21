class BannerBottom extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: 'open' });

		const wrapper = document.createElement('div');
		wrapper.classList.add('banner-bottom');

		wrapper.innerHTML = `
			<div class="content">
				<span>Muestra de spotify</span>
				<p>
					Regístrate para disfrutar de canciones y podcasts sin
					límites, con anuncios ocasionales. No hace falta tarjeta de
					crédito
				</p>
			</div>
			<button class="btn-full">Registrarte gratis</button>
		`;

		const style = document.createElement('style');
		style.textContent = `
			.banner-bottom {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 1rem 2rem;
				background-image: linear-gradient(90deg, #af2896, #509bf5);
				color: #fff;
				position: fixed;
				bottom: 0;
				z-index: 20;
				width: 100%;
				height: 8rem;
			}

			.banner-bottom .content {
				display: flex;
				flex-direction: column;
				gap: 1rem;
			}

			.banner-bottom .content span {
				font-size: 1.4rem;
				text-transform: uppercase;
			}

			.banner-bottom .content p {
				font-size: 1.6rem;
			}
		`;

		shadow.appendChild(style);
		shadow.appendChild(wrapper);
	}
}

customElements.define('banner-bottom', BannerBottom);
