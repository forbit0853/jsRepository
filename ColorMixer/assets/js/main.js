import { Controller } from "./controller.js";

import(Controller)
$(document).ready(() => {

    console.log('ColorMixer -> Start');
    let controller = new Controller();

    controller.redInit();
    controller.greenInit();
    controller.blueInit();

    controller.mixColors();
});