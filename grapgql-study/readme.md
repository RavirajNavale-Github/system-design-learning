# Introduction to GraphQL

# What is GraphQL?

GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data.
GraphQL allows you to describe the data you want to fetch from a server. Think of it like asking for specific information in a very precise way.
APIs are a way for different software systems to communicate with each other. GraphQL helps to make these communications more efficient and flexible.

# Why do we use GraphQL?

In traditional APIs, you might end up receiving more data than you need. For example, if you only need a user's name and email but the API returns their entire profile, you're getting unnecessary data. GraphQL allows you to specify exactly what data you want, which can make your app faster and more efficient.
Above point is for overFetching the data but GraphQL is also beneficial for underFetching like not getting enough data or requiring additional requests. For example, fetching a list of user IDs and then making separate requests for each user's details.
GraphQL uses a schema to define the structure of your data. This schema serves as a contract between the client and the server. It helps developers understand what data is available and how to request it.
Tools like Apollo DevTools make it easier to explore and debug your GraphQL queries.
So overall using GraphQL simplifies data fetching, improves performance, and provides a better developer experience. It's especially useful in modern applications where efficient data retrieval and flexibility are crucial.

# When to use GraphQL?

If your application needs to retrieve complex data structures, especially where you have nested or related data, GraphQL can be very helpful.
In traditional APIs, you might need to make several requests to get all the data you need but in GraphQL we have Nested Query to get all the data in one request.
If you have multiple clients (like a web app, a mobile app, and a smartwatch app) that all need slightly different data, GraphQL is useful.

# When not to use GraphQL?

If your app has straightforward data needs, traditional REST APIs might be simpler and sufficient.
GraphQL queries can sometimes be complex and heavy on the server. If performance is a concern, you might need to carefully manage query complexity.
GraphQL can be more complex to set up and learn than REST. If your team is new to it, there might be a steeper learning curve.

# How to use GraphQL?

Here we'll create a simple GraphQL API using Node.js and Apollo Server. We'll start by setting up the project structure and installing the necessary dependencies.

# Step 1:Project setup (Inside directory run following commands)

```bash

mkdir server
cd server
npm init -y

```

Install the required dependencies

```bash

npm install apollo-server graphql

```

# Step 2:Create Apollo Server

```js
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolver");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`YOUR API IS RUNNING AT: ${url} :)`);
});
```

In this file we are importing ApolloServer. And typeDefs and resolvers these file we will be creating later.
Then creating a new instance of ApollorServer and passing typeDefs & resolvers. (You will get to know about these two files further)
We call the listen() method on the server object to start the GraphQL server. This method returns a Promise that resolves to an object containing the url where the server is running.

# Step 3:Define GraphQL Schema

Create a folder schema and inside this create a file typeDefs.js. (/schema/typeDefs.js)

```js
const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type Query {
    users: [User!]!
  }
`;

module.exports = { typeDefs };
```

Importing gql from "apollo-server". Importing ‘gql’ from "apollo-server". ‘gql’ is a template literal tag provided by Apollo Server that allows us to write GraphQL schemas using a special syntax called GraphQL Schema Definition Language (SDL).
Then we define the GraphQL schema using the gql function. The schema defines two types: User and Query.
User: This type represents a user object with fields and the datatype.
Query: This type represents the root query type, which is the entry point for all GraphQL queries.

# Purpose of typeDefs.js?

This file defines a GraphQL schema using GraphQL Schema Definition Language (SDL), specifying the types and fields available in the API, and exports it for use in other parts of the application.

# Step 4:Implement Resolver

Create a fake data just to check the API so create a file /fakeData.js (Go to the gitHub link provided to get the data to paste in this file.)
Create a folder schema and inside this create a file resolver.js. (/schema/resolver.js)

```js
const { UserList } = require("../fakeData");

const resolvers = {
  Query: {
    users: () => {
      // Here you can write all your logic to tell graphQL what to return
      return UserList;
    },
  },
};

module.exports = { resolvers };
```

Importing users data from fakeData.js file.
Then defining resolvers for the Schema we have created above.
We define a resolver for the users query field within the Query type.
Inside the resolver function, we can implement any logic necessary to retrieve and return the data requested by the users query. And it simply returns the UserList object, which contains a list of user data.

# Purpose of resolver.js?

In GraphQL, resolvers are functions responsible for fetching the data for a specific field in the schema. They act as the medium between the incoming GraphQL queries and the data sources where the requested data resides. Resolvers determine how data is fetched and returned in response to client queries.

# Step 5:Start Server and check on browser

Start the server:

```bash

 node index.js

```

Copy the url from terminal or from here and paste in browser:

```js
http://localhost:4000/

```

# Conclusion

In this tutorial, we've covered the basics of GraphQL, including what it is, why we need it, and when to use it. We've also walked through the process of setting up a simple GraphQL API using Node.js and Apollo Server, including defining the schema, implementing resolvers, and starting the server.
GraphQL offers a powerful and flexible alternative to traditional RESTful APIs, allowing clients to request only the data they need and simplifying client-server communication. With its growing ecosystem of tools and libraries, GraphQL is becoming an increasingly popular choice for building modern web applications

# Other:

There are many factors like Mutation, useQuery, useMutation, Context , Fragments, Union and also while defining you can work with other data types. As soon as these points are completed, I will update this file.
Extension: There is an extension in VS-Code called “Apollo GraphQL '' you can install it. Basically what it does is it will just allow syntax highlighting inside the quotes. So the code in GraphQL is easily understandable and readable. (Extension ID: apollographql.vscode-apollo)
Github Link for code: https://github.com/RavirajNavale-Github/proof-of-concepts/tree/main/grapgql-study
