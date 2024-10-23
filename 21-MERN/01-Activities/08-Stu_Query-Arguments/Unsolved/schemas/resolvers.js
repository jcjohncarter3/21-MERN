const { School, Class, Professor } = require("../models");

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate("classes").populate({
        path: "classes",
        populate: "professor",
      });
    },
    classes: async () => {
      return await Class.find({}).populate("professor");
    },

    // TODO: Add a new resolver for a single Class object

    class: async (id) => {
      return await Class.findById(id);
    },

    professors: async () => {
      return await Professor.find({}).populate("classes");
    },
  },
};

module.exports = resolvers;
