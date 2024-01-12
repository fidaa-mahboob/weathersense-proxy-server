// npm install @apollo/server express graphql cors { ApolloServer } from "@apollo/server";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { schema } from "./schema/schema.js";
import {
  OpenWeatherMapCurrentWeatherAPI,
  OpenWeatherMapForecastWeatherAPI,
} from "./datasources/data.js";

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  schema: schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  cors({
    origin: ["http://localhost:4000/graphql"],
  }),
  express.json(),
  expressMiddleware(server, {
    context: async () => {
      const forecastApi = new OpenWeatherMapForecastWeatherAPI();
      const weatherApi = new OpenWeatherMapCurrentWeatherAPI();
      return {
        dataSources: { forecastApi, weatherApi },
      };
    },
  })
);

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
