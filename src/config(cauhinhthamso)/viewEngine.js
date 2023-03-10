import express from "express";
//var express = require('express') - import cux

let configViewEngine = (app) => {
  //arrow function
  app.use(express.static("./scr/public(img.scc..)"));
  //anh tren sv chi lay o public
  app.set("view engine", "ejs"); //"jsp", "blade" for if else
  app.set("views", "./src/views(html)");
};
module.exports = configViewEngine;
