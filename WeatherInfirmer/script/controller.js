import { WeatherModel } from "./weather_model.ls";

export class Controller {

 activateGetWeather() {
    $('#get-weather').click(() =>{
      console.log('GetWeatherButtun -> Click')

      let citeName = $('#city').val();
      let apiKey = '8dbd281d4c604153a90174236231306';
      let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

      if (cityName === '') {
        alert('Ви не заповнили iз назвою міста!');
        $('#city').focus();
      } else {
          $.detJSON(apiUrl, (data) => {
            console.log('API -> OK');
            console.log(data);

           let weather = new WeatherModel(data);
           console.log(weather);

           let visualizer = Visualizer();
           $('#display').html(visualizer.generateHtml(weather));

          })

          .error(() => {
            alert('Порогноз погоди для заданого міста не знайдено!')
          });
      }
    });
 }

 activateResWeather() {
    $('#res-weather').click(() =>{
        console.log('ResWeatherButtun -> Click');
        $('#city').val('');
        $('#display').html('');
        $('#city').focus();
      });
 }

}