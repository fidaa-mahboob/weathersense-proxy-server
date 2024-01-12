import axios from "axios";
let URL = "https://api.openweathermap.org/data/2.5/forecast?appid=9febc35812425cf718ad7e6c9ba49d6f";

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
         list: data.list
        }
      } catch(e){
        return null
      }
    },
  },
};
