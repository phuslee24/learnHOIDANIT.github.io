"use strict";

const sequelize = require("sequelize");
const { QueryInterface } = require("sequelize");

module.exports = {
  up: async (QueryInterface, sequelize) => {
    return QueryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123456", //plain text
        firstName: "phus",
        lastName: "lee",
        address: "tb",
        gender: 1,
        roleId: "ROLE",
        phoneNumber: "0367977194",
        image: "abcd",
        possitionId: "thacsi",
        email: "example@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (QueryInterface, sequelize) => {},
};
