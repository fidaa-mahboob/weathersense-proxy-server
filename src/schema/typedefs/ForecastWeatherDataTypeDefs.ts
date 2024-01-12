export const typeDefs = `
type Coord {
  lat: Float
  lon: Float
}

type City {
  id: Int
  name: String
  country: String
  population: Int
  timezone: Int
  sunrise: Int
  sunset: Int
  coord: Coord
}

type Sys {
  pod: String
}

type Wind {
  speed: Float
  deg: Int
  gust: Float
}

type Clouds {
  all: Int
}

type Weather {
  id: Int
  main: String
  description: String
  icon: String
}

type Main {
  temp: Float
  feels_like: Float
  temp_min: Float
  temp_max: Float
  pressure: Int
  sea_level: Int
  grnd_level: Int
  humidity: Int
  temp_kf: Float
}

type List {
  dt: Int
  visibility: Int
  pop: Int
  dt_txt: String
  sys: Sys
  wind: Wind
  clouds: Clouds
  weather: [Weather]
  main: Main
}

type ForecastWeatherData {
  cod: String
  message: Int
  cnt: Int
  city: City
  list: [List]
}

type Query {
  forecastweatherdata (lat: Float!, lon: Float!): ForecastWeatherData
}`;
