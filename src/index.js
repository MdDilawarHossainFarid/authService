
const express = require('express');
const {ServerConfig,DBConfig} = require('./config');

// const { Model, DataTypes } = require('sequelize');


const app = express();


app.use(express.json());








// class User extends Model {}

// User.init({

//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//   }
// }, {

//   sequelize,
//   modelName: 'User' 
// });
// User.sync();



//  async function getData() {
// return  await User.findAll();
// }

// app.get('/',(req,res) => {
//   getData().then(value => {
//         res.send(value)
// });

// })

// app.post('/user',  async(req, res) => {
// try{
//      const person = await User.create({
//    firstName:req.body.firstName,
//    lastName:req.body.lastName,
//     });
//   await person.save();
//     res.status(201).json(person);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.get('/',(req,res) =>{
//   console.log("hi")
// })

app.listen(ServerConfig.PORT, () => {
    console.log(`server is runing on port ${ServerConfig.PORT}`);
    DBConfig.sequelize.authenticate()
  .then(() => {
    console.log('✅ Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('❌ Unable to connect to the database:', error);
  });
User.sync();
console.log('The table for the User model was just (re)created!');
})
