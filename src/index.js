const express = require('express');
const { Sequelize } = require('sequelize');
const { Model, DataTypes } = require('sequelize');

const app = express();
const port = 3000;




const sequelize = new Sequelize('employee', 'root', '2023@#Node#D96', {
  host: 'localhost',
  dialect:'mysql'})

sequelize.authenticate()
  .then(() => {
    console.log('✅ Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('❌ Unable to connect to the database:', error);
  });



class User extends Model {}

User.init({

  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {

  sequelize,
  modelName: 'User' 
});

  User.sync();

 async function object1() {
    const person = await User.create({ firstName: 'farid', lastName: 'hossain' });
 const userData = await User.findAll();
return JSON.stringify(userData);
  }



 


app.get('/',(req,res) => {
    res.send()
})

app.listen(port, () => {
    console.log(`app is runing on port ${port}`)
})
