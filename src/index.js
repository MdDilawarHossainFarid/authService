const express = require('express');
const { Sequelize } = require('sequelize');
const { Model, DataTypes } = require('sequelize');

const app = express();
const port = 3000;
app.use(express.json());




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



 async function getData() {
return  await User.findAll();
}

app.get('/',(req,res) => {
  getData().then(value => {
        res.send(value)
});

})

app.post('/user',  async(req, res) => {
try{
     const person = await User.create({
   firstName:req.body.firstName,
   lastName:req.body.lastName,
    });
  await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



app.listen(port, () => {
    console.log(`app is runing on port ${port}`)
})
