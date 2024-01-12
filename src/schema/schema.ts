import { makeExecutableSchema } from "@graphql-tools/schema"
import { typeDefs as forecastWeatherDataTypeDefs } from "./typedefs/ForecastWeatherDataTypeDefs.js"
import { typeDefs as currentWeatherDataTypeDefs } from "./typedefs/CurrentWeatherDataTypeDefs.js"
import { resolver as currentWeatherDataResolver } from "./resolvers/CurrentWeatherDataResolver.js"
import { resolver as forecastWeatherDataResolver } from "./resolvers/ForecastWeatherDataResolver.js"

export const schema = makeExecutableSchema({ 
    typeDefs: [forecastWeatherDataTypeDefs, currentWeatherDataTypeDefs], 
    resolvers: [currentWeatherDataResolver, forecastWeatherDataResolver] 
})
