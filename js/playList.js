class SpotifySection extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('section');
        wrapper.classList.add('main-content');

        wrapper.innerHTML = `
            <!-- 1 Fila -->
            <div class="container-name-concentracion">
                <h1 class="title-playlist">Concentración</h1>
                <div class="container-card-concentracion">
                    <div class="card-concentracion">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/concentracion/peacefulpiano.jpg" alt="Peaceful piano"/>
                            </div>
                            <h2>Peaceful Piano</h2>
                            <p>Relax and indulge with beautiful piano pieces</p>
                        </div>
                    </div>
                    <div class="card-concentracion">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/concentracion/deep focus.jpg" alt="Deep Focus"/>
                            </div>
                            <h2>Deep Focus</h2>
                            <p>Keep calm and focus with ambient and post-rock music.</p>
                        </div>
                    </div>
                    <div class="card-concentracion">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/concentracion/instrumental study.jpg" alt="Instrumental study"/>
                            </div>
                            <h2>Instrumental Study</h2>
                            <p>Focus with soft study music in the background.</p>
                        </div>
                    </div>
                    <div class="card-concentracion">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/concentracion/coding mode.jpg" alt="Jazz Vibes"/>
                            </div>
                            <h2>Jazz Vibes</h2>
                            <p>The original chill instrumental beats playlist.</p>
                        </div>
                    </div>
                    <div class="card-concentracion">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/concentracion/focus flow.jpg" alt="Focus Flow"/>
                            </div>
                            <h2>Focus Flow</h2>
                            <p>Uptempo instrumental hip hop beats.</p>
                        </div>
                    </div>
                    <div class="card-concentracion">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/concentracion/workday lounge.jpg" alt="Workday Lounge"/>
                            </div>
                            <h2>Workday Lounge</h2>
                            <p>Lounge and chill out music for your workday.</p>
                        </div>
                    </div>
                    <div class="card-concentracion">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/concentracion/beats to think.jpg" alt="Beats to think to"/>
                            </div>
                            <h2>Beats to think to</h2>
                            <p>Focus with deep techno and tech house.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2 Fila -->
            <div class="container-name-spotify-playlists">
                <h1 class="title-playlist">Spotify Playlists</h1>
                <div class="container-card-spotify-playlists">
                    <div class="card-spotify-playlists">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/spotify playlists/today top hits.jpg" alt=""/>
                            </div>
                            <h2>Today's Top Hits</h2>
                            <p>Miley Cyrus is on top of the Hottest 50!</p>
                        </div>
                    </div>
                    <div class="card-spotify-playlists">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/spotify playlists/rap caviar.jpg" alt="RapCaviar"/>
                            </div>
                            <h2>RapCaviar</h2>
                            <p>New music from Metro Boomin, NLE Choppa and Rae Sremmurd.</p>
                        </div>
                    </div>
                    <div class="card-spotify-playlists">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/spotify playlists/all out.jpg" alt="All Out 2010s"/>
                            </div>
                            <h2>All Out 2010s</h2>
                            <p>The biggest songs of the 2010s.</p>
                        </div>
                    </div>
                    <div class="card-spotify-playlists">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/spotify playlists/rock classics.jpg" alt="Rock Classics"/>
                            </div>
                            <h2>Rock Classics</h2>
                            <p>Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters</p>
                        </div>
                    </div>
                    <div class="card-spotify-playlists">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/spotify playlists/chill hits.jpg" alt="Chill Hits"/>
                            </div>
                            <h2>Chill Hits</h2>
                            <p>Kick back to the best new and recent chill hits</p>
                        </div>
                    </div>
                    <div class="card-spotify-playlists">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/spotify playlists/viva latino.jpg" alt="Viva Latino"/>
                            </div>
                            <h2>Viva Latino</h2>
                            <p>Today's top Latin hits, elevando nuestra música. Cover: Yandel & Feid</p>
                        </div>
                    </div>
                    <div class="card-spotify-playlists">
                        <div class="card">
                            <div class="card-img">
                                <img src="img/spotify playlists/mega hit mix.jpg" alt=""/>
                            </div>
                            <h2>Mega Hit Mix</h2>
                            <p>A mega mix of 75 favorites from the last few years!</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            .main-content {
                grid-row: 1/3;
                grid-column: 2/-1;
                background-color: #121212;
                padding: 2.5rem;
                display: flex;
                flex-direction: column;
                gap: 3rem;
            }

            .title-playlist {
                font-size: 2.4rem;
                color: #fff;
                cursor: pointer;
                font-weight: 600;
            }

            .title-playlist:hover {
                text-decoration: underline;
            }

            .container-name-concentracion,
            .container-name-spotify-playlists {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                margin-bottom: 2rem;
            }

            .container-card-concentracion,
            .container-card-spotify-playlists {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
                gap: 2.4rem;
            }

            .card-concentracion,
            .card-spotify-playlists {
                background-color: #181818;
                border-radius: 0.5rem;
                padding: 1.6rem;
                box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
                transition: background-color 0.3s ease;
                cursor: pointer;
                position: relative;
            }

            .card-concentracion:hover,
            .card-spotify-playlists:hover {
                background-color: #282828;
            }

            .card-img img {
                width: 100%;
                border-radius: 0.5rem;
            }

            .card-img {
                overflow: hidden;
            }

            .card h2 {
                margin-top: 1.5rem;
                margin-bottom: 1rem;
                font-size: 1.6rem;
                color: #fff;
                font-weight: 600;
            }

            .card p {
                font-size: 1.3rem;
                color: #b3b3b3;
                font-weight: 400;
                line-height: 1.5;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

customElements.define('spotify-section', SpotifySection);