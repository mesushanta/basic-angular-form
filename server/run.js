const express = require('express');
const bodyParser = require('body-parser');
const Friend= require('./models/friend');
const mongoose= require('mongoose');
const db=require('./config/config').get(process.env.NODE_ENV);

const app = express();

mongoose.Promise=global.Promise;
mongoose.connect(db.DATABASE,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});

const PORT = 6969;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


let allFriends = [{fName: 'Coach', lName: 'Tim', email: 'tim.broos@becode.org', phone: '0469420666', signatureMove: 'Yeet', language: 'Javascript'}];

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.

app.get('/', function (request, response) {
    response.send('Hello from server');
});

app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});

app.post('/add-friend', function (request, response) {
    response.status(200).send({"message": allFriends});
});

// adding new user (sign-up route)
app.post('/api/friend/add',function(req,res){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const phoneRegex = /^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/;
    const newFriend = new Friend(req.body);
    let errors = [];
    if (!newFriend.first_name) {
        errors.push({ 'first_name': "First name is required" });
    }
    if (!newFriend.last_name) {
        errors.push({ 'last_name': "Last name is required" });
    }
    if (!newFriend.email) {
        errors.push({ 'email': "Email is required" });
    }
    else if(!emailRegex.test(newFriend.email)) {
        errors.push({ 'email': "Invalid email" });
    }
    if (!newFriend.phone) {
        errors.push({ 'phone': "Please fill phone number" });
    }
    else if(!phoneRegex.test(newFriend.phone)) {
        errors.push({ 'phone': "Invalid phone number" });
    }
    if (!newFriend.age) {
        errors.push({ 'age': "Please fill the age" });
    }
    else if(!Number.isInteger(newFriend.age) || newFriend.age < 0) {
        errors.push({ 'age': "Age mus be a valid number" });
    }
    if(errors.length > 0) {
        return res.status(200).json({message: errors})
    }
    Friend.findOne({email:newFriend.email},function(err,user){
        if(user) return res.status(400).json({ success : false, message :"Friend with this email already exists"});

         newFriend.save((err,doc)=>{
            if(err) {console.log(err);
                return res.status(400).json({ success : false});}
            res.status(200).json({
                success:true,
                user : doc
            });
         });
    });
});

app.get('/api/friends', function (req, res) {
    let friends = Friend.find({}, function(err, friends){
        if(err){
            console.log(err);
        }
        else {
            res.json(friends);
        }
    });
});

app.put('/api/update-best-friend/:id',function(req,res){
    Friend.findOneAndUpdate({_id: req.params.id},req.body).then(function(student){
        Friend.findOne({_id: req.params.id}).then(function(friend){
            res.send(friend);
        });
    });
});

app.get('/api/friend/:id', function (req, res) {
    let friend = Friend.find({_id: req.params.id}, function(err, friend){
        if(err){
            console.log(err);
        }
        else {
            res.json(friend);
        }
    });
});

app.put('/api/update-friend/:id',function(req,res){
    Friend.findOneAndUpdate({_id: req.params.id},req.body).then(function(student){
        Friend.findOne({_id: req.params.id}).then(function(friend){
            res.send(friend);
        });
    });
});

app.listen(PORT, function () {});