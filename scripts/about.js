import{
    renderOffcanvas,
    renderNavbarLeftSide,
    renderNavbarRightSide,
    setUpEventFunctions,
}from './script.js'

window.onload = () =>{
    renderOffcanvas();
    renderNavbarLeftSide();
    renderNavbarRightSide('about');
    setUpEventFunctions();
}