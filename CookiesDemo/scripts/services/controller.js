import { Validator } from './validator.js'
import { CookiesManager } from './cookies_manager.js';
export class Controller {
    constructor() {
        console.log('Controller');
    }

    activateCreateButton() {
        $('#b1').click(() => {
            let key = $('#key').val();
            let val = $('#val').val();
            let exp = $('#exp').val();

            if (Validator.validateFields(key, val, exp)) {
                CookiesManager.setCookie(key, val, exp);
            }
        });
    }
    activateDisplayButton() {
        $('#b1').click(() => {

        });
    }
    activateSearchButton() {
        $('#b1').click(() => {

        });
    }
    activateChangeeButton() {
        $('#b1').click(() => {

        });
    }
    activateDeleteButton() {
        $('#b1').click(() => {

        });
    }
    activateResetButton() {
        $('#b1').click(() => {

        });
    }
}