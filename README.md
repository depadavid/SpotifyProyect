Api: https://rapidapi.com/Glavier/api/spotify23

Figma: https://www.figma.com/community/file/1178206974820059749/music-player-app-design-free-to-use 

Libreria de Web Components: https://lit.dev/




<div class="banner-bottom">
			<div class="content">
				<span>Muestra de spotify</span>
				<p>
					Regístrate para disfrutar de canciones y podcasts sin
					límites, con anuncios ocasionales. No hace falta tarjeta de
					crédito
				</p>
			</div>
			<button class="btn-full">Registrarte gratis</button>
		</div>

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

/* Clases Adicionales */
.transparent {
	opacity: 0.9;
}

.btn-play {
	width: 5rem;
	height: 5rem;

	display: flex;
	justify-content: center;
	align-items: center;

    background-color: #1ed760;
    border: none;
    outline: none;
    border-radius: 50%;
    position: absolute;
    top: 55%;
    left: 52%;
    transform: translate(50%, -50%);
    cursor: pointer;
}

.btn-play i{
    font-size: 2.3rem;
    padding-left: .5rem;
}
