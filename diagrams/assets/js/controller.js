export class Controller {
    //props:
    names = []
    results = []
    context = null;
    source = 'server/data.json';
    colors = [
        'red', 'green', 'blue', 'purple', 'orange', 'bisque'
    ];

    constructor() {
        console.log('Controller - OK');
    }

    loadData() {
        $.getJSON(this.source, (json) => {
            console.log(json.results);
            let out = '';
            let name = '';
            let result = 0;

            for (let item of json.results) {
                name = item.name;
                result = item.result;
                this.names.push(name);
                this.results.push(result);

                out += `
            <tr>
               <td>${name}</td>
               <td></td>
            </tr>
             `;
            }
        });
    }
    activateLoadButton() {
        $('#load-btn').click(() => {
            console.log('load-btm')
            this.loadData();
        });
    }

    activateCircleButton() {
        $('#circle-btn').click(() => {
            console.log('CircleButton -> Click');
            let context = this.drawer.context;
            this.drawer.builPies(context, this.results, this.names)
        })
    }
}
