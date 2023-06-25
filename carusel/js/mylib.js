class Controller {
     constructor(boxId, bonWigth, boxHeight, imeges, duration){
       this._duration = duration;
      this._box = ${`#${BoxId}`};

        this._wigth = boxWigth;
        this._height = boxHeight;
        this._images = images;

        this._box.css('width', this.width);
        this._box.css('height', this.height);
        this._box.show(this._duration);

        this._slideId = 0;
        console.log('Ok--');
     }
     _loadImage(index, path){
      $('<img>', { 
         id: index + 1,
         src: 'path',
         class: 'slide',
      })

      .appendTo(this._box);
     img.fadeIn(this._duration);
     }
     loadCollection(index, collection,) {
      setTimeout(() => {
       if (index > collection.length - 1){
         $('#left-arrow').fadeIn(this._duration * 2);
         $('#right-arrow').fadeIn(this._duration * 2);
         return;
       } else{
         
         this._slideId = index;
         this._loadImage(index, collection[index++]);
         $('progress').val(index);
         this.loadCollection(index, collection);
        
       }
      }, this._duration);
     }
     activateArrowHover() {
      $('.arrow').hover(
         function() {'rotate(360deg)');
         },
         function() {

         }
      );
     }
     activateLeftArrow() {
      $('#left-arrow').on('click', () => {
         if (this._slideId) > 0) {
            $('#${this._slideId--}').fadeOut(this._duration);
            $('#progress').val(this._slideId);
         }else {
            alert('Ви на початку - перехід ліворуч неможливий')
         }
      })
     }
}