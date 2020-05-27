import { LitElement, html, css, unsafeCSS } from 'lit-element/lit-element';
import './contact.js'

export class ListContacts extends LitElement {
    static get properties() {
        return {
            contactos: {type: Array}
        }
    }

    constructor() {
        super();
        this._obtener_contactos();
    }

    static get is(){
        return 'list-contacts';
    }

    render() {
        return html`
            <link href="css/bootstrap.css" rel="stylesheet">
            <link href="css/style.css" rel="stylesheet">
            <div>
                <h1 id="titulo">Lista de Contactos</h1>
                ${this.contactos.map(c => html`<my-contact nombre="${c.nombre}" email="${c.email}"></my-contact>`)}
            </div>  
        `;
    }

    _obtener_contactos(){
        this.contactos = [
            {
              nombre: 'María Camila Buitrago',
              email: 'camila@gmail.com'
            },
            {
              nombre: 'Sergio Torrado Peñaranda',
              email: 'contacto@escuela.it'
            },
            {
              nombre: 'Jhon Doe',
              email: 'jhon@example.com'
            },
          ]
    }

}

customElements.define(ListContacts.is, ListContacts);