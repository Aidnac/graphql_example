const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

//middleware tells graphqlHTTP
//to handle everthing from /graghql
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    /**This says we want to use the garphiQL tool when
     * we go to this address in the browser note the
     * spelling of 'graphi ql' not 'graphical'
     */
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
