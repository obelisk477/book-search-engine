const { User } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, {username}) => {
      return User.findOne({ username });
    },
  },
  Mutation: {
    saveBook: async (parent, args) => {
      return true
    }
  },
};

module.exports = resolvers;
