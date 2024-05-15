import { LitElement, html, css } from "lit";
class mySpotify extends LitElement{
  static properties= {
    track: {type: String}
  }
  static styles = css`
    .track{
      width: 100%;
      height: 600px;
    }
  `;
  render(){
    return html`
      <input @change="${this.getTrack}">
      <iframe 
      src="https://open.spotify.com/embed/track/${this.track}" 
      frameBorder="0" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `
  }
  async getTrack(e){
    const config = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3f4c660f71msh5286a7e33f1ba8fp1428c3jsnc1252ecd5a6d',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    let res = await fetch(`https://spotify23.p.rapidapi.com/search/?q=${e.target.value}&type=tracks&offset=0&limit=1`, config)
    let data = await res.json();
    let {tracks: {items: [musica]}} = data;
    this.track = musica.data.id;
    this.requestUpdate();
  }
}
customElements.define("my-spotify", mySpotify)