export { pageLoad, content, header, mainCont}
import { home } from './home.js'
import { menu } from './menu.js'
import { contact } from './contact.js'

let content = document.createElement('div');
let header = document.createElement('div');
let mainCont = document.createElement('div');
//create initial html template
let pageLoad = () => {
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

    //initailaize grid
    let empLeft = document.createElement('div');
    content.appendChild(empLeft);
    mainCont.setAttribute('id','mainCont');
    content.appendChild(mainCont);
    let empRgt = document.createElement('div');
    content.appendChild(empRgt);

    //call home.js for initial pageload
    home();

    //listener for menu tab
    navElm[1].addEventListener('click', e => {
        navElm[1].style.backgroundColor="greenyellow";
        navElm[1].style.color="deepskyblue";

        navElm[0].style.backgroundColor="";
        navElm[0].style.color="white";
        navElm[2].style.backgroundColor="";
        navElm[2].style.color="white";
        menu();
    })

     //listener for home tab
     navElm[0].addEventListener('click', e => {
        navElm[0].style.backgroundColor="greenyellow";
        navElm[0].style.color="deepskyblue";

        navElm[1].style.backgroundColor="";
        navElm[1].style.color="white";
        navElm[2].style.backgroundColor="";
        navElm[2].style.color="white";
        home();
    })

    //listener for contact tab
    navElm[2].addEventListener('click', e => {
        navElm[2].style.backgroundColor="greenyellow";
        navElm[2].style.color="deepskyblue";

        navElm[1].style.backgroundColor="";
        navElm[1].style.color="white";
        navElm[0].style.backgroundColor="";
        navElm[0].style.color="white";
        contact();
    })

    //footer
    footer.innerText = "Copyright © 2022 Astrobar"
}