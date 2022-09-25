/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ "./src/modules/initial.js");

;

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
     _initial_js__WEBPACK_IMPORTED_MODULE_0__.mainCont.appendChild(contact1);

     //delivery
     let delv = document.createElement('div');
     delv.setAttribute('id','delv');
     delv.innerText = "For delivery download our app now!"
     _initial_js__WEBPACK_IMPORTED_MODULE_0__.mainCont.appendChild(delv);
}

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ "./src/modules/initial.js");



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
    _initial_js__WEBPACK_IMPORTED_MODULE_0__.mainCont.appendChild(home1);

    //content box2
    let home2 = document.createElement('diiv');
    home2.setAttribute('id','home2');
    home2.innerText = "The best place to experience otherworldly delights. Started in 2022 with a humble restaurant based on earth we have now expanded across "
    +"3 planets and 5 moons "
    +"Our space themed restaurant will literally make you go to space."
    +" Visit your nearest Astrobar now! We're also now delivering straight to your place.";
    _initial_js__WEBPACK_IMPORTED_MODULE_0__.mainCont.appendChild(home2);

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
    _initial_js__WEBPACK_IMPORTED_MODULE_0__.mainCont.appendChild(home3);

    //content box 4
    let home4 = document.createElement('div');
    home4.setAttribute('id','home4');
    home4.innerText = "MAIN LOCATION: 155, BROOKLYN, NEW YORK, UNITED STATES OF NEW YORK, EARTH."
    _initial_js__WEBPACK_IMPORTED_MODULE_0__.mainCont.appendChild(home4);
}


/***/ }),

/***/ "./src/modules/initial.js":
/*!********************************!*\
  !*** ./src/modules/initial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "mainCont": () => (/* binding */ mainCont),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/modules/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/modules/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/modules/contact.js");

;



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
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)();

    //listener for menu tab
    navElm[1].addEventListener('click', e => {
        navElm[1].style.backgroundColor="greenyellow";
        navElm[1].style.color="deepskyblue";

        navElm[0].style.backgroundColor="";
        navElm[0].style.color="white";
        navElm[2].style.backgroundColor="";
        navElm[2].style.color="white";
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();
    })

     //listener for home tab
     navElm[0].addEventListener('click', e => {
        navElm[0].style.backgroundColor="greenyellow";
        navElm[0].style.color="deepskyblue";

        navElm[1].style.backgroundColor="";
        navElm[1].style.color="white";
        navElm[2].style.backgroundColor="";
        navElm[2].style.color="white";
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)();
    })

    //listener for contact tab
    navElm[2].addEventListener('click', e => {
        navElm[2].style.backgroundColor="greenyellow";
        navElm[2].style.color="deepskyblue";

        navElm[1].style.backgroundColor="";
        navElm[1].style.color="white";
        navElm[0].style.backgroundColor="";
        navElm[0].style.color="white";
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)();
    })

    //footer
    footer.innerText = "Copyright © 2022 Astrobar"
}

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ "./src/modules/initial.js");

;

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
    _initial_js__WEBPACK_IMPORTED_MODULE_0__.mainCont.appendChild(menuImg);
    //menu column1
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/initial.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtCO0FBQ2xCLENBQXdEOztBQUV4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDZEQUFvQjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDZEQUFvQjtBQUN6Qjs7Ozs7Ozs7Ozs7Ozs7O0FDMUJnRDtBQUNqQzs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQW9COztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQW9COztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFvQjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFvQjtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0M2QztBQUM3QyxDQUFnQztBQUNBO0FBQ007O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEtBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDhDQUFJOztBQUVSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBSTtBQUNaLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFJO0FBQ1osS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQU87QUFDZixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEdlO0FBQ2YsQ0FBd0Q7O0FBRXhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBb0I7QUFDeEI7QUFDQTs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgY29udGFjdCB9XG5pbXBvcnQgeyBjb250ZW50LCBoZWFkZXIsIG1haW5Db250IH0gZnJvbSAnLi9pbml0aWFsLmpzJ1xuXG4vL2NvbnRhY3QgcGFnZVxubGV0IGNvbnRhY3QgPSAoKSA9PiB7XG5cbiAgICAgLy9yZW1vdmUgY2hpbGQgZWxlbWVudHNcbiAgICAgbGV0IHJlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udCcpO1xuICAgICB3aGlsZShyZW0uZmlyc3RDaGlsZClcbiAgICAge1xuICAgICAgICAgcmVtLnJlbW92ZUNoaWxkKHJlbS5maXJzdENoaWxkKTtcbiAgICAgfVxuXG4gICAgIC8vY29udGFjdCBib3ggMVxuICAgICBsZXQgY29udGFjdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgY29udGFjdDEuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnQxJyk7XG4gICAgIGNvbnRhY3QxLmlubmVyVGV4dCA9IFwiRW1haWw6IGFzdHJvYmFyQG1haWwuY29tIFxcblwiXG4gICAgICtcIkNvbnRhY3QgbnVtYmVyOiAxMjM0NTY3ODkwIFxcblwiXG4gICAgICtcIllPdSBjYW4gZmluZCB1cyBpbiBhbGwgc29jaWFsIG1lZGlhXCJcbiAgICAgbWFpbkNvbnQuYXBwZW5kQ2hpbGQoY29udGFjdDEpO1xuXG4gICAgIC8vZGVsaXZlcnlcbiAgICAgbGV0IGRlbHYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgZGVsdi5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVsdicpO1xuICAgICBkZWx2LmlubmVyVGV4dCA9IFwiRm9yIGRlbGl2ZXJ5IGRvd25sb2FkIG91ciBhcHAgbm93IVwiXG4gICAgIG1haW5Db250LmFwcGVuZENoaWxkKGRlbHYpO1xufSIsImltcG9ydCB7IGNvbnRlbnQsIG1haW5Db250IH0gZnJvbSAnLi9pbml0aWFsLmpzJ1xuZXhwb3J0IHsgaG9tZSB9XG5cbi8vaG9tZSBwYWdlXG5sZXQgaG9tZSA9ICgpID0+IHtcblxuICAgIC8vcmVtb3ZlIGNoaWxkIGVsZW1lbnRzXG4gICAgbGV0IHJlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udCcpO1xuICAgIHdoaWxlKHJlbS5maXJzdENoaWxkKVxuICAgIHtcbiAgICAgICAgcmVtLnJlbW92ZUNoaWxkKHJlbS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvL2NvbnRlbnQgYm94IDFcbiAgICBsZXQgaG9tZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lMS5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZTEnKTtcbiAgICBob21lMS5pbm5lclRleHQgPSBcIkl0J3MgZm9vZCBmcm9tIHNwYWNlLi4uLndoYXQ/P1wiO1xuICAgIG1haW5Db250LmFwcGVuZENoaWxkKGhvbWUxKTtcblxuICAgIC8vY29udGVudCBib3gyXG4gICAgbGV0IGhvbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlpdicpO1xuICAgIGhvbWUyLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lMicpO1xuICAgIGhvbWUyLmlubmVyVGV4dCA9IFwiVGhlIGJlc3QgcGxhY2UgdG8gZXhwZXJpZW5jZSBvdGhlcndvcmxkbHkgZGVsaWdodHMuIFN0YXJ0ZWQgaW4gMjAyMiB3aXRoIGEgaHVtYmxlIHJlc3RhdXJhbnQgYmFzZWQgb24gZWFydGggd2UgaGF2ZSBub3cgZXhwYW5kZWQgYWNyb3NzIFwiXG4gICAgK1wiMyBwbGFuZXRzIGFuZCA1IG1vb25zIFwiXG4gICAgK1wiT3VyIHNwYWNlIHRoZW1lZCByZXN0YXVyYW50IHdpbGwgbGl0ZXJhbGx5IG1ha2UgeW91IGdvIHRvIHNwYWNlLlwiXG4gICAgK1wiIFZpc2l0IHlvdXIgbmVhcmVzdCBBc3Ryb2JhciBub3chIFdlJ3JlIGFsc28gbm93IGRlbGl2ZXJpbmcgc3RyYWlnaHQgdG8geW91ciBwbGFjZS5cIjtcbiAgICBtYWluQ29udC5hcHBlbmRDaGlsZChob21lMik7XG5cbiAgICAvL2NvbnRlbnQgYm94IDNcbiAgICBsZXQgaG9tZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lMy5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZTMnKTtcbiAgICBsZXQgaG9tZTNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbGV0IGhvbWUzQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUzQ29udC5zZXRBdHRyaWJ1dGUoJ2lkJywnaDNjJyk7XG4gICAgaG9tZTNUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywnaDN0Jyk7XG4gICAgaG9tZTNUaXRsZS5pbm5lclRleHQ9XCJJTkZPXCJcbiAgICBob21lM0NvbnQuaW5uZXJUZXh0ID0gXCJLaW5kbHkgdmlzaXQgb3VyIENPTlRBQ1QgcGFnZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhbmQgZGVsaXZlcnkgb3B0aW9ucy4gWW91IGNhbiB2aWV3IG91ciBvZmZlcmluZ3MgaW4gdGhlIE1FTlUuIEZvbGxvdyB1cyBvbiBzb2NpYWwgbWVkaWFcIlxuICAgICtcIiBmb3IgbGF0ZXN0IHVwZGF0ZXMuIFRpbWluZ3MgZGVwZW5kIG9uIGJyYW5jaCBsb2NhdGlvbi4gV2UgZGVsaXZlciAyNCBob3VycyBvbiBhbGwgc2V2ZW4gZGF5cyBvZiB0aGUgd2Vlay5cIjtcbiAgICBob21lMy5hcHBlbmRDaGlsZChob21lM1RpdGxlKTtcbiAgICBob21lMy5hcHBlbmRDaGlsZChob21lM0NvbnQpO1xuICAgIG1haW5Db250LmFwcGVuZENoaWxkKGhvbWUzKTtcblxuICAgIC8vY29udGVudCBib3ggNFxuICAgIGxldCBob21lNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWU0LnNldEF0dHJpYnV0ZSgnaWQnLCdob21lNCcpO1xuICAgIGhvbWU0LmlubmVyVGV4dCA9IFwiTUFJTiBMT0NBVElPTjogMTU1LCBCUk9PS0xZTiwgTkVXIFlPUkssIFVOSVRFRCBTVEFURVMgT0YgTkVXIFlPUkssIEVBUlRILlwiXG4gICAgbWFpbkNvbnQuYXBwZW5kQ2hpbGQoaG9tZTQpO1xufVxuIiwiZXhwb3J0IHsgcGFnZUxvYWQsIGNvbnRlbnQsIGhlYWRlciwgbWFpbkNvbnR9XG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudS5qcydcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnXG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZXQgbWFpbkNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vY3JlYXRlIGluaXRpYWwgaHRtbCB0ZW1wbGF0ZVxubGV0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ3RvcCcpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ21haW4nKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2Zvb3QnKTtcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgLy90aXRsZVxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0PVwiQVNUUk9CQVJcIlxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvL25hdiBiYXJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCduYXYnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBcbiAgICAvL25hdiBlbGVtZW50c1xuICAgIGxldCBuYXZFbG0gPSBbXTtcbiAgICBsZXQgbmF2UGF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZQYXQuc2V0QXR0cmlidXRlKCdpZCcsJ25hdlBhdCcpO1xuICAgIGZvcihsZXQgaT0wOyBpPDM7IGkrKylcbiAgICB7XG4gICAgICAgIG5hdkVsbVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5hdkVsbVtpXS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbmF2RWxtJyk7XG4gICAgICAgIGlmKGk9PTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hdkVsbVtpXS5pbm5lclRleHQ9XCJIb21lXCI7XG4gICAgICAgICAgICBuYXZFbG1baV0uc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiZ3JlZW55ZWxsb3dcIjtcbiAgICAgICAgICAgIG5hdkVsbVtpXS5zdHlsZS5jb2xvcj1cImRlZXBza3libHVlXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpPT0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBuYXZFbG1baV0uaW5uZXJUZXh0PVwiTWVudVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBuYXZFbG1baV0uaW5uZXJUZXh0PVwiQ29udGFjdFwiO1xuICAgICAgICB9XG4gICAgICAgIG5hdlBhdC5hcHBlbmRDaGlsZChuYXZFbG1baV0pO1xuICAgIH1cbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2UGF0KTtcblxuICAgIC8vaW5pdGFpbGFpemUgZ3JpZFxuICAgIGxldCBlbXBMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChlbXBMZWZ0KTtcbiAgICBtYWluQ29udC5zZXRBdHRyaWJ1dGUoJ2lkJywnbWFpbkNvbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250KTtcbiAgICBsZXQgZW1wUmd0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChlbXBSZ3QpO1xuXG4gICAgLy9jYWxsIGhvbWUuanMgZm9yIGluaXRpYWwgcGFnZWxvYWRcbiAgICBob21lKCk7XG5cbiAgICAvL2xpc3RlbmVyIGZvciBtZW51IHRhYlxuICAgIG5hdkVsbVsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBuYXZFbG1bMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiZ3JlZW55ZWxsb3dcIjtcbiAgICAgICAgbmF2RWxtWzFdLnN0eWxlLmNvbG9yPVwiZGVlcHNreWJsdWVcIjtcblxuICAgICAgICBuYXZFbG1bMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yPVwiXCI7XG4gICAgICAgIG5hdkVsbVswXS5zdHlsZS5jb2xvcj1cIndoaXRlXCI7XG4gICAgICAgIG5hdkVsbVsyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJcIjtcbiAgICAgICAgbmF2RWxtWzJdLnN0eWxlLmNvbG9yPVwid2hpdGVcIjtcbiAgICAgICAgbWVudSgpO1xuICAgIH0pXG5cbiAgICAgLy9saXN0ZW5lciBmb3IgaG9tZSB0YWJcbiAgICAgbmF2RWxtWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIG5hdkVsbVswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJncmVlbnllbGxvd1wiO1xuICAgICAgICBuYXZFbG1bMF0uc3R5bGUuY29sb3I9XCJkZWVwc2t5Ymx1ZVwiO1xuXG4gICAgICAgIG5hdkVsbVsxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJcIjtcbiAgICAgICAgbmF2RWxtWzFdLnN0eWxlLmNvbG9yPVwid2hpdGVcIjtcbiAgICAgICAgbmF2RWxtWzJdLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIlwiO1xuICAgICAgICBuYXZFbG1bMl0uc3R5bGUuY29sb3I9XCJ3aGl0ZVwiO1xuICAgICAgICBob21lKCk7XG4gICAgfSlcblxuICAgIC8vbGlzdGVuZXIgZm9yIGNvbnRhY3QgdGFiXG4gICAgbmF2RWxtWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIG5hdkVsbVsyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJncmVlbnllbGxvd1wiO1xuICAgICAgICBuYXZFbG1bMl0uc3R5bGUuY29sb3I9XCJkZWVwc2t5Ymx1ZVwiO1xuXG4gICAgICAgIG5hdkVsbVsxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJcIjtcbiAgICAgICAgbmF2RWxtWzFdLnN0eWxlLmNvbG9yPVwid2hpdGVcIjtcbiAgICAgICAgbmF2RWxtWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvcj1cIlwiO1xuICAgICAgICBuYXZFbG1bMF0uc3R5bGUuY29sb3I9XCJ3aGl0ZVwiO1xuICAgICAgICBjb250YWN0KCk7XG4gICAgfSlcblxuICAgIC8vZm9vdGVyXG4gICAgZm9vdGVyLmlubmVyVGV4dCA9IFwiQ29weXJpZ2h0IMKpIDIwMjIgQXN0cm9iYXJcIlxufSIsImV4cG9ydCB7IG1lbnUgfVxuaW1wb3J0IHsgY29udGVudCwgaGVhZGVyLCBtYWluQ29udCB9IGZyb20gJy4vaW5pdGlhbC5qcydcblxuLy9tZW51IHBhZ2VcbmxldCBtZW51ID0gKCkgPT4ge1xuXG4gICAgLy9yZW1vdmUgY2hpbGQgZWxlbWVudHNcbiAgICBsZXQgcmVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250Jyk7XG4gICAgd2hpbGUocmVtLmZpcnN0Q2hpbGQpXG4gICAge1xuICAgICAgICByZW0ucmVtb3ZlQ2hpbGQocmVtLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIC8vY29udGVudFxuICAgIGxldCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsJy4uL3NyYy9tZW51LmpwZycpXG4gICAgbWVudUltZy5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudUltZycpO1xuICAgIG1haW5Db250LmFwcGVuZENoaWxkKG1lbnVJbWcpO1xuICAgIC8vbWVudSBjb2x1bW4xXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tb2R1bGVzL2luaXRpYWwuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=