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
        this._gallery.html(`
        <img id="back" src="/Gallery1/asseta/icons/308242_arrow_left_icon.ico" alt="" title="Натисните для повернення до панелі рег">
        `)
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

activateNavBack() {
    $('#gallery').on('click', '#back', () => {
       console.log('Back - Click');
       this._gallery.hide(1000);
       this._nav.show(1000);

             this._logo.animate({'width' : '0%'}, 1);
             this._logo.attr('src', 'assets/logo/');
             this._logo.animate({'width' : '50%'}, 1000);
        });
    }

    activateNavMini() {
        $('#gallery').on('click', '.mini', (event) => {
           console.log('Mini - Click');
             let miniUrl = $(event.target).attr('src');
             console.log(`miniUrl -> ${miniUrl}`)

             this._logo.animate({'width' : '0%'}, 1);
             this._logo.attr('src', miniUrl);
             this._logo.animate({'width' : '100%'}, 1000);
            });
        }