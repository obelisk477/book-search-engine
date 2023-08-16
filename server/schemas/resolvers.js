const { User } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, {name}) => {
      return User.findOne({ name });
    },
  },
  Mutation: {
    createUser: async (parent, args) => {

    }
  },
};

module.exports = resolvers;
