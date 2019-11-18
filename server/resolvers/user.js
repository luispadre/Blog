const { users, tasks } = require("../constants");
const User = require("./../database/models/user");
const jwt = require("jsonwebtoken");
module.exports = {
  Query: {
    users: () => users,
    user: (_, { id},{email}) => users.find(user => {
      console.log('===',email)
      user.id == id}),
  },
  Mutation: {
    signup: async (_, { input }) => {
      console.log(input);
      try {
        const user = await User.findOne({ email: input.email });
        if (user) {
          throw new Error("Email already in use");
        }
        const newUser = await new User({ ...input });
        const result = await newUser.save();
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    login: async (_, { input }) => {
      try {
        const user = await User.findOne({ email: input.email });
        if (!user) {
          console.log(user)
          throw new Error("User not found");
        }
        if (!user.authenticate(input.password)) {
            throw new Error('Email and password do not match');
            
        }
        const token = jwt.sign(
          { _id: user._id, role: user.role, user:user.name},
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1d" }
        );
        const { _id, name, email, role } = user;
        return { token, user: { _id, email, name, role } };
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  User: {
    tasks: ({ id }) => tasks.filter(task => task.userId === id),
  },
};
