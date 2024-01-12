export const resolver = {
  Query: {
    currentweatherdata: async (_, { lat, lon }, { dataSources }) => {
      const data =
        await dataSources.OpenWeatherMapCurrentWeatherAPI.getCurrentWeather(
          lon,
          lat
        );
      return {...data}
    },
  },
};
