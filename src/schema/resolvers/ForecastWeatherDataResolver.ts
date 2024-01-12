export const resolver = {
  Query: {
    forecastweatherdata: async (_, { lat, lon }, { dataSources }) => {
      const data =
        await dataSources.OpenWeatherMapForecastWeatherAPI.getForecastWeather(
          lon,
          lat
        );
      return {...data}
    },
  },
};
