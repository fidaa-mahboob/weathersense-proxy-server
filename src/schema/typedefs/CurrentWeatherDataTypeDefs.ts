export const typeDefs = `
type Sys {
  type: Int
  id: Int
  country: String
  sunrise: Int
  sunset: Int
}

type Clouds {
  all: Int
}

type Wind {
  speed: Float
  deg: Int
}

type Main {
  temp: Float
  feels_like: Float
  temp_min: Float
  temp_max: Float
  pressure: Int
  humidity: Int
}

type Weather {
  id: Int
  main: String
  description: String
  icon: String
}

type Coord {
  lon: Float
  lat: Float
}

type CurrentWeatherData {
  base: String
  visibility: Int
  dt: Int
  timezone: Int
  id: Int
  name: String
  cod: Int
  sys: Sys
  clouds: Clouds
  wind: Wind
  main: Main
  weather: [Weather]
  coord: Coord
}

type Query {
  currentweatherdata (lat: Float!, lon: Float!): CurrentWeatherData
}`