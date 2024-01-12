import { RESTDataSource } from "@apollo/datasource-rest";

export class OpenWeatherMapCurrentWeatherAPI extends RESTDataSource {
  override baseURL = "https://api.openweathermap.org/data/2.5/";

  async getCurrentWeather(lon, lat) {
    const data = await this.get(
      `weather?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
    ).then((resp) => {
      return resp;
    });
  }
}

export class OpenWeatherMapForecastWeatherAPI extends RESTDataSource {
  override baseURL = "https://api.openweathermap.org/data/2.5/";

  async getForecastWeather(lon, lat) {
    const data = await this.get(
      `forecast?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
    ).then((resp) => {
      return resp;
    });
  }
}
