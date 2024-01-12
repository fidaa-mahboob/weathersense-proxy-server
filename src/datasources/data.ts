import { RESTDataSource } from "@apollo/datasource-rest";

export class OpenWeatherMapWeatherAPI extends RESTDataSource {
  override baseURL = "https://api.openweathermap.org/data/2.5/";

  async getCurrentWeather(lon, lat) : Promise<any> {
    return this.get<any>(`weather?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`)
  }

  async getForecastWeather(lon, lat) : Promise<any> {
    return this.get<any>(`forecast?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`)
  }
}

