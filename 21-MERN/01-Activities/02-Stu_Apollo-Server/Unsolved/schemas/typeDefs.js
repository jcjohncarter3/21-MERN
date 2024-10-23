const typeDefs = `
  # TODO: Add a comment describing the functionality of this statement
  # Below are the fields that have data which can be requested.
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # The Query named classes GETS the info from the type class from lines 4-9 and you want to wrap it into an array
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
