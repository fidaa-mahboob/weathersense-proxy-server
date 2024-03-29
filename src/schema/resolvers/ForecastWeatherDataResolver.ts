import axios from "axios";

const API_KEY = process.env.API_KEY 
let URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const resolver = {
  Query: {
    forecastweatherdata: async (obj, args, context, info) => {
      const {lat, lon} = args
      URL = URL + `&lat=${lat}&lon=${lon}&units=metric`;
      try{
        const { data } = await axios.get(URL);
        return {
         cod: data.cod,
         message: data.message,
         cnt: data.cnt,
         city: data.city,
         list: () => {
          return data.list
         }
        }
      } catch(e){
        return null
      }
    },
  },
};


