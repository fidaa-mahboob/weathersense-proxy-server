// npm install @apollo/server express graphql cors { ApolloServer } from "@apollo/server";
import 'dotenv/config'
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema/schema.js";
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';

const server = new ApolloServer({
  schema: schema,
});

// const { url } = await startStandaloneServer(server);
// console.log(`🚀  Server ready at ${url}`);

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server, handlers.createAPIGatewayProxyEventV2RequestHandler()
);
