'use strict'


class Validator {
    constructor() {
        this._loginIsValid = false;
        this._pass1IsValid = false;
        this._pass2IsValid = false;
        this._emailIsValid = false;
        console.log('Ok-->');
    }
    get loginIsValid() {
        return this._loginIsValid;
    }
    get pass1IsValid() {
        return this._pass1IsValid;
    }
    get pass2IsValid() {
        return this._pass2IsValid;
    }
    get emailIsValid() {
        return this._emailIsValid;
    }

    checkLogin(loginValue) {
        let regularExpression = /^[a-zA-z0-9\_\-\. ]{6,16}$/;
        this._loginIsValid = regularExpression.test(loginValue);
    }
}