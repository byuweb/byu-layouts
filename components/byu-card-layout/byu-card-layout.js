'use strict';

import template from './byu-card-layout.html';
import * as util from "byu-web-component-utils";

class BYUCardLayout extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        util.applyTemplate(this, 'byu-card-layout', template);
    }
}

window.customElements.define('byu-card-layout', BYUCardLayout);
window.BYUCardLayout = BYUCardLayout;