const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const cors = require('cors');

app.use('/graphql', cors(), graphqlHTTP(
  async (request, response, graphQLParams) => ({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })));


app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
