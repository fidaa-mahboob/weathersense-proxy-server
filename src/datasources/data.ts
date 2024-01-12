import { RESTDataSource } from "@apollo/datasource-rest";

export class OpenWeatherMapWeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.openweathermap.org/data/2.5/";
  }
  // override baseURL = "https://api.openweathermap.org/data/2.5/";

  async getCurrentWeather(lon, lat) {
    const data = await this.get(
      `weather?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
    ).then((resp) => {
      return resp;
    });
  }

  async getForecastWeather(lon, lat) {
    const data = await this.get(
      `forecast?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
    ).then((resp) => {
      return resp;
    });
  }
}

