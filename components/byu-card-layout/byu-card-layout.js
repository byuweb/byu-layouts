// TODO:

// Added attribute to allow the user to set number of columns for the layout

'use strict';

import template from './byu-card-layout.html';
import * as util from "byu-web-component-utils";

class BYUCardLayout extends HTMLElement {

    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        util.applyTemplate(this, 'byu-card-layout', template);
        var columns = this.getAttribute('column-count');
            this.shadowRoot.querySelector('.slot-container').classList.add(columns + '-col'); 
        
        
    }
}

window.customElements.define('byu-card-layout', BYUCardLayout);
window.BYUCardLayout = BYUCardLayout;
