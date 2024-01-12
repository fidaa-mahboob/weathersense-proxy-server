import axios from "axios";
let URL ="https://api.openweathermap.org/data/2.5/weather?appid=9febc35812425cf718ad7e6c9ba49d6f";

export const resolver = {
  Query: {
    currentweatherdata: async (obj, args, context, info) => {
      const {lat, lon} = args
      URL = URL + `&lat=${lat}&lon=${lon}&units=metric`;
      try{
        const { data } = await axios.get(URL);
        return {
         coord: data.coord,
         weather: data.weather,
         base: data.base,
         main: data.main,
         visibility: data.visibility,
         wind: data.wind,
         clouds: data.clouds,
         dt: data.dt,
         sys: data.sys,
         timezone: data.timezone,
         id: data.id,
         name: data.name,
         cod: data.cod
        }
      } catch(e){
        return null
      }
    },
  },
};
