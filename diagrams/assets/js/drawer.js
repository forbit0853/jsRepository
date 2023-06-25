buildRectangles(g, results, names) {
    let N = results.length;
    if (N === 0) {
        alert('Ви не завантажілі дині для побудови!');
    } else {
        this._builAxios();
        let w = (this.canvasWidth - 20) / N - 5;
        let k = Math.max.apply(null, results) / (this.canvasHeight - 20);
        g.font = '10pt Arial';

        for (let i = 0; i < N; i++) {
            let h = results[i] / k - 5;
            let x = i * (w + 5) + 10;
            let y = this.canvasHeight - 10 - h;

            g.fillStyle = this.colors[i];
            g.fillRect(x, y, w, h);
            g.fillText(names[i], x + 2, y - 5);
        }
    }
    builPies(g, results, names) {
        let N = results.length;
        if (N === 0) {
            alert('Ви не завантажілі дині для побудови!');
        } else {
            console.log('побудова колової діаграми')
            let centreX = this.canvasWidth / 2;
            let centreY = this.canvasHeight / 2;
            let
                g.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            g.strokeStyle = 'gray';
            g.linewWidth = 2;

            g.strokeStyle = this.colors[0];
            g.fillstyle = this.colors[1]
            g.linewWidth = 5;

            let s = 0;
            for (let x of results) {
                s += x;
            }
            let k = s / (2 * Math.PI);
            for (let i = 0; i < 2; i++) {
                let a1 = 0;
                let a2 = 0;
                
                if (i == 0) {
                    a1 = 0;
                    a2 = results[i] / k;
                }
                else {
                    a1 = results[i - 1] / k;
                    let a2 = results[i - 1] + k + results[i] / k;
                }
                g.fillStyle = this.color[i++];
            }





            g.beginPath();
            g.moveTo(centerX, centreY)
            g.arc(centerX, centerY, radius, a1, a2);
            g.lineTo(centreX, centreY)
            g.stroke();
            g.fill();

            g.fillStyle = this.colors[2];
            g.beginPath();
            g.moveTo(centerX, centreY)
            g.arc(centerX, centerY, 100, Math.PI / 4, 3 * Math.PI / 4);
            g.lineTo(centreX, centreY)
            g.stroke();
            g.fill();
        };
    }
}










