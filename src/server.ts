// npm install @apollo/server express graphql cors { ApolloServer } from "@apollo/server";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema/schema.js";

const server = new ApolloServer({
  schema: schema,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀  Server ready at ${url}`);
