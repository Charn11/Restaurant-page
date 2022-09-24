/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/modules/initial.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });



//create initial html template
let pageLoad = () => {
    let header = document.createElement('div');
    let content = document.createElement('div');
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
    title.innerText="ASTROURANT"
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
        }
        else if(i==1)
        {
            navElm[i].innerText="Menu";
        }
        else{
            navElm[i].innerText="About";
        }
        navPat.appendChild(navElm[i]);
    }
    nav.appendChild(navPat);
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0I7OztBQUdwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2luaXRpYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgeyBwYWdlTG9hZCB9O1xuXG5cbi8vY3JlYXRlIGluaXRpYWwgaHRtbCB0ZW1wbGF0ZVxubGV0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ3RvcCcpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ21haW4nKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2Zvb3QnKTtcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgLy90aXRsZVxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0PVwiQVNUUk9VUkFOVFwiXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIC8vbmF2IGJhclxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsJ25hdicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICAgIFxuICAgIC8vbmF2IGVsZW1lbnRzXG4gICAgbGV0IG5hdkVsbSA9IFtdO1xuICAgIGxldCBuYXZQYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdlBhdC5zZXRBdHRyaWJ1dGUoJ2lkJywnbmF2UGF0Jyk7XG4gICAgZm9yKGxldCBpPTA7IGk8MzsgaSsrKVxuICAgIHtcbiAgICAgICAgbmF2RWxtW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbmF2RWxtW2ldLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCduYXZFbG0nKTtcbiAgICAgICAgaWYoaT09MClcbiAgICAgICAge1xuICAgICAgICAgICAgbmF2RWxtW2ldLmlubmVyVGV4dD1cIkhvbWVcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGk9PTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hdkVsbVtpXS5pbm5lclRleHQ9XCJNZW51XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIG5hdkVsbVtpXS5pbm5lclRleHQ9XCJBYm91dFwiO1xuICAgICAgICB9XG4gICAgICAgIG5hdlBhdC5hcHBlbmRDaGlsZChuYXZFbG1baV0pO1xuICAgIH1cbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2UGF0KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=