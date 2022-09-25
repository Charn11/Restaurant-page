export { menu }
import { content, header, mainCont } from './initial.js'

//menu page
let menu = () => {

    //remove child elements
    let rem = document.getElementById('mainCont');
    while(rem.firstChild)
    {
        rem.removeChild(rem.firstChild);
    }

    //content
    let menuImg = document.createElement('img');
    menuImg.setAttribute('src','../src/menu.jpg')
    menuImg.setAttribute('id','menuImg');
    mainCont.appendChild(menuImg);
    //menu column1
}