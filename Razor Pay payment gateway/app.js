const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');




const sequelize = require('./connections/database');


const Users = require('./models/user');
const Order = require('./models/order');
const Forgotpassword = require('./models/forgotPassword');



const mainPageRouter = require('./routes/mainpage');
const addUser = require('./routes/add-user');
const userName = require('./routes/getUsername');
const userLogin = require('./routes/user-login');

const purchase = require('./routes/razorPayUser');
const forgotPassword = require('./routes/forgotPassword');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(mainPageRouter)
app.use('/add-user', addUser);
app.use('/user-login', userLogin);
app.use('/getUser', userName);

app.use('/purchase', purchase);
app.use('/password', forgotPassword);






Users.hasMany(Order);
Order.belongsTo(Users);


Users.hasMany(Forgotpassword);
Forgotpassword.belongsTo(Users);



sequelize.sync()
    .then(() => {
        app.listen(4500, () => {
            console.log("server Is started on port 4500");
        })
    })
    .catch(err => {
        console.log(err);
    });