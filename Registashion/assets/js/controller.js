'use strict'

class Controller{
    constructor() {
         this._login = document.getElementById('login');
         this._pass1 = document.getElementById('pass1');
         this._pass2 = document.getElementById('pass2');
         this._email = document.getElementById('login');

         this._loginMess = document.getElementById('login-mess');
         this._pass1Mess = document.getElementById('pass1-mess');
         this._pass2Mess = document.getElementById('pass2-mess');
         this._emailMess = document.getElementById('email-mess');

         this._form = documen.getElementById('reg-form');
         this._validator = Validator();
         console.log('Controller -> Ok');
        }

    activateSubmit() {
        this._form.addEventListener('submit', () => {
         console.log(OOk)
        });
    }
}