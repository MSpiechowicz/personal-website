const searchPreload = /\bpreload\b/;
const searchIE = /(MSIE|rv:11\.0)/;

function validateBrowser() {
    if ('addEventListener' in window) {
        window.addEventListener('load', changeDocumentName());
        document.body.className += (navigator.userAgent.match(searchIE) ? ' is-ie' : '');
    }
}

function changeDocumentName() {
    document.body.className = document.body.className.replace(searchPreload, '');
}