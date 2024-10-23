const { Class } = require("../models");

// TODO: Add a comment describing the functionality of this expression
// resolvers has a query that gets classes
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // the return is displaying what ever is being found in class from the database.
      return await Class.find({});
    },
  },
};

module.exports = resolvers;
