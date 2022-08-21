const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connect to mlab database
mongoose.connect(
  'mongodb+srv://aidnac:3ri9TiKxxYYev7n7@cluster0.1dpa1lf.mongodb.net/?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});
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
