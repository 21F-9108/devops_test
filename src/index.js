const express = require("express");
const path = require("path");
const collection = require("./config");


const app = express();

 app.use(express.json());
// app.use(express.static("public"));
 app.use(express.static(path.join(__dirname, '../public')));

 app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");


app.use('/controller', express.static(path.join(__dirname, '../controller')));
const indexRoutes = require('../routes/indexRoutes');
const accountRoutes=require('../routes/accountRoutes');
const aboutRoutes=require('../routes/aboutRoutes');
const contactRoutes=require('../routes/contactRoutes');
const shopRoutes=require('../routes/shopRoutes');
const userRoutes = require('../routes/userRoutes');
const forgetRoutes=require('../routes/forgetRoutes')



app.use('/', indexRoutes);
app.use('/',accountRoutes)
app.use('/',aboutRoutes)
app.use('/',contactRoutes)
app.use('/',shopRoutes)
app.use(userRoutes); // Mount userRoutes without a prefix
app.use('/',forgetRoutes);



const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
module.exports = app; // Export app for testing
