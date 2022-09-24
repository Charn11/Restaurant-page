/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    //initailaize grid
    let empLeft = document.createElement('div');
    _initial_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(empLeft);
    let mainCont = document.createElement('div');
    mainCont.setAttribute('id','mainCont');
    _initial_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(mainCont);
    let empRgt = document.createElement('div');
    _initial_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(empRgt);

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
    +"From grilled alien tentacles to startdust sprinkled champagne it's all here."
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


/***/ }),

/***/ "./src/modules/initial.js":
/*!********************************!*\
  !*** ./src/modules/initial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/modules/home.js");

;

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
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)();

    //footer
    footer.innerText = "Copyright © 2022 Astrobar"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3ZCOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksNERBQW1CO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLDREQUFtQjtBQUN2QjtBQUNBLElBQUksNERBQW1COztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEMkI7QUFDM0IsQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw4Q0FBSTs7QUFFUjtBQUNBO0FBQ0E7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGVudCB9IGZyb20gJy4vaW5pdGlhbC5qcydcbmV4cG9ydCB7IGhvbWUgfVxuXG4vL2hvbWUgcGFnZVxubGV0IGhvbWUgPSAoKSA9PiB7XG5cbiAgICAvL2luaXRhaWxhaXplIGdyaWRcbiAgICBsZXQgZW1wTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1wTGVmdCk7XG4gICAgbGV0IG1haW5Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnQuc2V0QXR0cmlidXRlKCdpZCcsJ21haW5Db250Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udCk7XG4gICAgbGV0IGVtcFJndCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1wUmd0KTtcblxuICAgIC8vY29udGVudCBib3ggMVxuICAgIGxldCBob21lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUxLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lMScpO1xuICAgIGhvbWUxLmlubmVyVGV4dCA9IFwiSXQncyBmb29kIGZyb20gc3BhY2UuLi4ud2hhdD8/XCI7XG4gICAgbWFpbkNvbnQuYXBwZW5kQ2hpbGQoaG9tZTEpO1xuXG4gICAgLy9jb250ZW50IGJveDJcbiAgICBsZXQgaG9tZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWl2Jyk7XG4gICAgaG9tZTIuc2V0QXR0cmlidXRlKCdpZCcsJ2hvbWUyJyk7XG4gICAgaG9tZTIuaW5uZXJUZXh0ID0gXCJUaGUgYmVzdCBwbGFjZSB0byBleHBlcmllbmNlIG90aGVyd29ybGRseSBkZWxpZ2h0cy4gU3RhcnRlZCBpbiAyMDIyIHdpdGggYSBodW1ibGUgcmVzdGF1cmFudCBiYXNlZCBvbiBlYXJ0aCB3ZSBoYXZlIG5vdyBleHBhbmRlZCBhY3Jvc3MgXCJcbiAgICArXCIzIHBsYW5ldHMgYW5kIDUgbW9vbnMgXCJcbiAgICArXCJGcm9tIGdyaWxsZWQgYWxpZW4gdGVudGFjbGVzIHRvIHN0YXJ0ZHVzdCBzcHJpbmtsZWQgY2hhbXBhZ25lIGl0J3MgYWxsIGhlcmUuXCJcbiAgICArXCIgVmlzaXQgeW91ciBuZWFyZXN0IEFzdHJvYmFyIG5vdyEgV2UncmUgYWxzbyBub3cgZGVsaXZlcmluZyBzdHJhaWdodCB0byB5b3VyIHBsYWNlLlwiO1xuICAgIG1haW5Db250LmFwcGVuZENoaWxkKGhvbWUyKTtcblxuICAgIC8vY29udGVudCBib3ggM1xuICAgIGxldCBob21lMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUzLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lMycpO1xuICAgIGxldCBob21lM1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBsZXQgaG9tZTNDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZTNDb250LnNldEF0dHJpYnV0ZSgnaWQnLCdoM2MnKTtcbiAgICBob21lM1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCdoM3QnKTtcbiAgICBob21lM1RpdGxlLmlubmVyVGV4dD1cIklORk9cIlxuICAgIGhvbWUzQ29udC5pbm5lclRleHQgPSBcIktpbmRseSB2aXNpdCBvdXIgQ09OVEFDVCBwYWdlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFuZCBkZWxpdmVyeSBvcHRpb25zLiBZb3UgY2FuIHZpZXcgb3VyIG9mZmVyaW5ncyBpbiB0aGUgTUVOVS4gRm9sbG93IHVzIG9uIHNvY2lhbCBtZWRpYVwiXG4gICAgK1wiIGZvciBsYXRlc3QgdXBkYXRlcy4gVGltaW5ncyBkZXBlbmQgb24gYnJhbmNoIGxvY2F0aW9uLiBXZSBkZWxpdmVyIDI0IGhvdXJzIG9uIGFsbCBzZXZlbiBkYXlzIG9mIHRoZSB3ZWVrLlwiO1xuICAgIGhvbWUzLmFwcGVuZENoaWxkKGhvbWUzVGl0bGUpO1xuICAgIGhvbWUzLmFwcGVuZENoaWxkKGhvbWUzQ29udCk7XG4gICAgbWFpbkNvbnQuYXBwZW5kQ2hpbGQoaG9tZTMpO1xuXG4gICAgLy9jb250ZW50IGJveCA0XG4gICAgbGV0IGhvbWU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZTQuc2V0QXR0cmlidXRlKCdpZCcsJ2hvbWU0Jyk7XG4gICAgaG9tZTQuaW5uZXJUZXh0ID0gXCJNQUlOIExPQ0FUSU9OOiAxNTUsIEJST09LTFlOLCBORVcgWU9SSywgVU5JVEVEIFNUQVRFUyBPRiBORVcgWU9SSywgRUFSVEguXCJcbiAgICBtYWluQ29udC5hcHBlbmRDaGlsZChob21lNCk7XG59XG4iLCJleHBvcnQgeyBwYWdlTG9hZCwgY29udGVudH1cbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2hvbWUuanMnXG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vL2NyZWF0ZSBpbml0aWFsIGh0bWwgdGVtcGxhdGVcbmxldCBwYWdlTG9hZCA9ICgpID0+IHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywndG9wJyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnbWFpbicpO1xuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywnZm9vdCcpO1xuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAvL3RpdGxlXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQ9XCJBU1RST0JBUlwiXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIC8vbmF2IGJhclxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsJ25hdicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICAgIFxuICAgIC8vbmF2IGVsZW1lbnRzXG4gICAgbGV0IG5hdkVsbSA9IFtdO1xuICAgIGxldCBuYXZQYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdlBhdC5zZXRBdHRyaWJ1dGUoJ2lkJywnbmF2UGF0Jyk7XG4gICAgZm9yKGxldCBpPTA7IGk8MzsgaSsrKVxuICAgIHtcbiAgICAgICAgbmF2RWxtW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbmF2RWxtW2ldLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCduYXZFbG0nKTtcbiAgICAgICAgaWYoaT09MClcbiAgICAgICAge1xuICAgICAgICAgICAgbmF2RWxtW2ldLmlubmVyVGV4dD1cIkhvbWVcIjtcbiAgICAgICAgICAgIG5hdkVsbVtpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJncmVlbnllbGxvd1wiO1xuICAgICAgICAgICAgbmF2RWxtW2ldLnN0eWxlLmNvbG9yPVwiZGVlcHNreWJsdWVcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGk9PTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hdkVsbVtpXS5pbm5lclRleHQ9XCJNZW51XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIG5hdkVsbVtpXS5pbm5lclRleHQ9XCJDb250YWN0XCI7XG4gICAgICAgIH1cbiAgICAgICAgbmF2UGF0LmFwcGVuZENoaWxkKG5hdkVsbVtpXSk7XG4gICAgfVxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZQYXQpO1xuXG4gICAgLy9jYWxsIGhvbWUuanNcbiAgICBob21lKCk7XG5cbiAgICAvL2Zvb3RlclxuICAgIGZvb3Rlci5pbm5lclRleHQgPSBcIkNvcHlyaWdodCDCqSAyMDIyIEFzdHJvYmFyXCJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21vZHVsZXMvaW5pdGlhbC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==