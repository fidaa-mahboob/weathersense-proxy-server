import axios from "axios";

const API_KEY = process.env.API_KEY
let URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

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
