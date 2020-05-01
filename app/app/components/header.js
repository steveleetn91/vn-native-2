import style from '../css/style.js';
let header = () => {
    let html;
    html = document.createElement("div");
    html.class = "header-app";
    html.id = "header-app";
    html.setAttribute('style',style.header);
    let siteName = document.createElement("h2");
    siteName.innerText = "Vn Native 2";
    siteName.setAttribute("style",style.appTitle);
    html.appendChild(siteName);
    return html;
}
export default header;