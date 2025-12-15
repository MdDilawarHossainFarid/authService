
const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const port = 3000;


// Initialize Sequelize
// const sequelize = new Sequelize({
//   dialect: 'mysql',
//   database: 'employee',
//   user: 'root',
//   password: '2023@#Node#D96',
//   host: 'localhost',
//   port: 3306,
// });

const sequelize = new Sequelize('employee', 'root', '2023@#Node#D96', {
  host: 'localhost',
  dialect:'mysql'})
// Test connection
sequelize.authenticate()
  .then(() => {
    console.log('✅ Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('❌ Unable to connect to the database:', error);
  });

app.get('/',(req,res) => {
    let sum = 1 + 2;
    res.send(sum )
})

app.listen(port, () => {
    console.log(`app is runing on port ${port}`)
})
