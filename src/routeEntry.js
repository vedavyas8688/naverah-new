import { loadPage } from './loadPage.js';

// Begin route discovery during module initialization, before mounting the app.
export const pageReady = loadPage();
