export { contact }
import { content, header, mainCont } from './initial.js'

//contact page
let contact = () => {

     //remove child elements
     let rem = document.getElementById('mainCont');
     while(rem.firstChild)
     {
         rem.removeChild(rem.firstChild);
     }

     //contact box 1
     let contact1 = document.createElement('div');
     contact1.setAttribute('id','cont1');
     contact1.innerText = "Email: astrobar@mail.com \n"
     +"Contact number: 1234567890 \n"
     +"YOu can find us in all social media"
     mainCont.appendChild(contact1);

     //delivery
     let delv = document.createElement('div');
     delv.setAttribute('id','delv');
     delv.innerText = "For delivery download our app now!"
     mainCont.appendChild(delv);
}