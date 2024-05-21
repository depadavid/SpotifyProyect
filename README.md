Api: https://rapidapi.com/Glavier/api/spotify23

Figma: https://www.figma.com/community/file/1178206974820059749/music-player-app-design-free-to-use 

Libreria de Web Components: https://lit.dev/

			<div class="topbar">
				<div class="container-arrows">
					<div class="container-arrow-left">
						<i class="fa-solid fa-chevron-left"></i>
					</div>
					<div class="container-arrow-right">
						<i class="fa-solid fa-chevron-right"></i>
					</div>
				</div>
				<div class="buttons-user">
					<a href="#" class="btn-register">Registrarte</a>
					<a href="#" class="btn-login btn-full">Iniciar sesión</a>
				</div>
			</div>

.topbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background-color: #101010;

	position: fixed;
	z-index: 30;
	top: 0;
	right: 0;
	width: calc(100% - 30rem);
}

.container-arrows {
	display: flex;
	gap: 3rem;
}

.container-arrow-left,
.container-arrow-right {
	background-color: #0a0a0a;
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.container-arrow-left i,
.container-arrow-right i {
	color: #fff;
	font-size: 1.4rem;
}

.buttons-user {
	display: flex;
	align-items: center;
	gap: 3rem;
}

.btn-register {
	color: #a7a7a7;
	font-weight: 700;
	text-decoration: none;
	font-size: 1.6rem;
}

.btn-register:hover {
	color: #fff;
	transform: scale(1.04);
}

.btn-login {
	text-decoration: none;
}

.btn-full {
	font-size: 1.6rem;
	color: #000;
	padding: 1.5rem 2rem;
	border-radius: 2rem;
	font-weight: 700;
	background-color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
}

.btn-full:hover {
	transform: scale(1.04);
}