"use strict";

const sequelize = require("sequelize");
const { QueryInterface } = require("sequelize/types");

module.exports = {
  up: async (QueryInterface, sequelize) => {
    return QueryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (QueryInterface, sequelize) => {},
};
