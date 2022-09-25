import { content, mainCont } from './initial.js'
export { home }

//home page
let home = () => {

    //remove child elements
    let rem = document.getElementById('mainCont');
    while(rem.firstChild)
    {
        rem.removeChild(rem.firstChild);
    }

    //content box 1
    let home1 = document.createElement('div');
    home1.setAttribute('id','home1');
    home1.innerText = "It's food from space....what??";
    mainCont.appendChild(home1);

    //content box2
    let home2 = document.createElement('diiv');
    home2.setAttribute('id','home2');
    home2.innerText = "The best place to experience otherworldly delights. Started in 2022 with a humble restaurant based on earth we have now expanded across "
    +"3 planets and 5 moons "
    +"Our space themed restaurant will literally make you go to space."
    +" Visit your nearest Astrobar now! We're also now delivering straight to your place.";
    mainCont.appendChild(home2);

    //content box 3
    let home3 = document.createElement('div');
    home3.setAttribute('id','home3');
    let home3Title = document.createElement('h3');
    let home3Cont = document.createElement('div');
    home3Cont.setAttribute('id','h3c');
    home3Title.setAttribute('id','h3t');
    home3Title.innerText="INFO"
    home3Cont.innerText = "Kindly visit our CONTACT page for more information and delivery options. You can view our offerings in the MENU. Follow us on social media"
    +" for latest updates. Timings depend on branch location. We deliver 24 hours on all seven days of the week.";
    home3.appendChild(home3Title);
    home3.appendChild(home3Cont);
    mainCont.appendChild(home3);

    //content box 4
    let home4 = document.createElement('div');
    home4.setAttribute('id','home4');
    home4.innerText = "MAIN LOCATION: 155, BROOKLYN, NEW YORK, UNITED STATES OF NEW YORK, EARTH."
    mainCont.appendChild(home4);
}
