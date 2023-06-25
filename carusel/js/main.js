$(document).ready(() => {

console.log{'Ok'}
const manager = new Manager
manager.fillCollection('collection1', 'Photo-', 10);

let targetCollection = manager.collection
console.log(targetCollection: $(targetCollection))
const slider = new Slider('slider', '800px', '450px', manager.collection, 500);
slider.loadCollection(0, targetCollection);
});

