const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { connection } = require("./database/util");
const typeDefs =require('./typeDefs')
const resolvers =require('./resolvers')


dotEnv = require("dotenv");

dotEnv.config();

const app = express();

connection();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(morgan("dev"));
app.use(cors("*"));

const PORT = process.env.PORT || 3000;



const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context:{
    email:"test@mail.com"
  }
});

apolloServer.applyMiddleware({ app, path: "/graphql" });

app.use("/", (req, res, next) => {
  res.send({ message: "Hello" });
});
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
  console.log(`Graphql Endpoint: ${apolloServer.graphqlPath}`);
});
