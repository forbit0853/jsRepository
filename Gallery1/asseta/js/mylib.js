class Controller {
    constructor() {
      this._nav = $('section > nav');
      this._gallery = $('#gallery');
      this._logo = $('#logo');
      this._buttons = $('.nav-img');
      console.log('controller -> ok');

    }

    loadImages(dir, prefix) {
        this._nav.hide(1000);
        this._gallery.show(1000);
        for (let i = 1; i <= 5; i++) {
            $('<img>', {
                scr: `assets/img/cats/c${i}.jpg`,
                class: 'mini'
            }).appenfTo(this._gallery);
        }
    }
    activateNav() {
        this._buttons.click(() => {
        console.log('buttons -> click');
        this.loadImages(0, 0);
        });
    }
}