import { Controller } from './controller.js';


$(document).ready(() => {
 console.log("Ok - jquery");
 const controller = new Controller();

 controller.activateLoadButton();
 controller.activateCircleButton();
});