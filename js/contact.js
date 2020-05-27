import { LitElement, html, css, unsafeCSS } from 'lit-element/lit-element';

class Contact extends LitElement {
    static get properties() {
        return {
            nombre: {type: String},
            email: {type: String},
            vermas: {type: Boolean}
        }
    }

    constructor() {
        super();
        this.vermas = false;
    }

    static get is(){
        return 'my-contact';
    }

    render() {
        return html`
        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
        <div class="contenedor">
            <div id="borde">
                <h3 id="nombre">${this.nombre}</h3>
                <p><a href="#" @click="${this._eventoVerMas}">Ver más</a></p>    
                ${this.vermas ? html `<h5 id="email">${this.email}</h5>` : ''  }

            </div>
        </div>
        `;
    }

    _eventoVerMas(e){
        e.preventDefault();
        this.vermas = !this.vermas;
    }

}

customElements.define(Contact.is, Contact);