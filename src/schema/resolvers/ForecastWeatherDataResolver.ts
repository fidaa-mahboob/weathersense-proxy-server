export const resolver = {
  Query: {
    forecastweatherdata: async (_, { lat, lon }, { dataSources }) => {
      const data =
        await dataSources.OpenWeatherMapWeatherAPI.getForecastWeather(
          lon,
          lat
        );
      return {...data}
    },
  },
};
