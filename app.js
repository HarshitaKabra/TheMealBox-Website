const express = require('express');
const path = require('path');
const app = express();
var mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost/contactMealBox', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 9000;


// Define Mongoose schema 

var contactSchema = new mongoose.Schema({
    name: String,
    
    email: String,
    myText: String
    
    
});


const Contact = mongoose.model('Contact', contactSchema);



app.use('/static', express.static('static'));
app.use(express.urlencoded());


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res)=>{
    const params={};
    res.status(200).render('home.pug', params);
})


app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug');
});
app.get('/menu', (req, res)=>{
    res.status(200).render('menu.pug');
})
app.get('/OurStory', (req, res)=>{
    res.status(200).render('OurStory.pug');
})
app.get('/faq', (req, res)=>{
    res.status(200).render('faq.pug');
})
app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("We will soon reach out to you via your email id. Thank You")
    }).catch(()=>{
        res.status(404).send("Item was not saved to the database. Please Try Again")
    });
    
})
app.listen(port, ()=>{
    console.log(`The application successfully on port ${port}`);

});
