export { pageLoad, content}
import { home } from './home.js'

let content = document.createElement('div');
//create initial html template
let pageLoad = () => {
    let header = document.createElement('div');
    let footer = document.createElement('div');
    header.setAttribute('id','top');
    content.setAttribute('id','main');
    footer.setAttribute('id','foot');
    let mainDiv = document.getElementById('content');
    mainDiv.appendChild(header);
    mainDiv.appendChild(content);
    mainDiv.appendChild(footer);

    //title
    let title = document.createElement('h1');
    title.setAttribute('id','title');
    title.innerText="ASTROBAR"
    header.appendChild(title);

    //nav bar
    let nav = document.createElement('div');
    nav.setAttribute('id','nav');
    header.appendChild(nav);
    
    //nav elements
    let navElm = [];
    let navPat = document.createElement('ul');
    navPat.setAttribute('id','navPat');
    for(let i=0; i<3; i++)
    {
        navElm[i] = document.createElement('li');
        navElm[i].setAttribute('class','navElm');
        if(i==0)
        {
            navElm[i].innerText="Home";
            navElm[i].style.backgroundColor="greenyellow";
            navElm[i].style.color="deepskyblue";
        }
        else if(i==1)
        {
            navElm[i].innerText="Menu";
        }
        else{
            navElm[i].innerText="Contact";
        }
        navPat.appendChild(navElm[i]);
    }
    nav.appendChild(navPat);

    //call home.js
    home();

    //footer
    footer.innerText = "Copyright © 2022 Astrobar"
}