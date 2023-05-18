'use strict'

window.addEventListener('load', () => {

    console.log('MainScript => start');
    const displayBox = document.getElementById('display-box');
    const startBtn = document.getElementById('start-button');

    startBtn.addEventListener('click', () => {
        let shapes = [
            new Circle(11),
            new Circle(35),
            new Rectangle(10, 13),
            new Rectangle(18, 4),
            new Triangle(10, 6, 13)
        ];

        let k = 0;
        let result = 0;

        for (let e of shapes) {
            let x = e.calcSquare();
            result += x;
            displayBox.innerHTML += `<br>${++k}. ${e} >>> площа: ${x.toFixed(2)} `;
        }

        displayBox.innerHTML += `<br><br>Загальна площа: ${result.toFixed(2)}`
    });
});