export const resolver = {
  Query: {
    currentweatherdata: async (_, { lat, lon }, { dataSources }) => {
      const data =
        await dataSources.OpenWeatherMapWeatherAPI.getCurrentWeather(
          lon,
          lat
        );
      return {...data}
    },
  },
};
