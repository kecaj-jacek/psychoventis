import './style.css'
import { renderHeader } from './src/components/Header.js'
import { renderFooter } from './src/components/Footer.js'

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
});
