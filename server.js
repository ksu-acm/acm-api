const app = require('express')();
const parser = require('body-parser');
const MySQL = require('mysql');
const connection = MySQL.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'officers'
});
