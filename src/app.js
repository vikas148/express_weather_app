// 1.20 se start kre


const express = require("express");
// const { templates } = require("handlebars");
const path = require("path");
const hbs = require('hbs')

const app = express();
const port = process.env.PORT || 8000;

//public static path
// console.log(path.join(__dirname,"../public"));
const static_path = path.join(__dirname,"../public")
const templates_path = path.join(__dirname,"./templates/views")
// const partials_path = path.join(__dirname,"../templates/partials")
const partials_path = path.join(__dirname,"./templates/partials")


app.set('view engine', 'hbs')
app.set('views', templates_path)
app.use(express.static(static_path));
hbs.registerPartial(partials_path)



//routing
app.get("/", (req,res)=>{
    res.render('index');
})




app.get("/about", (req,res)=>{
    res.render('about');
})


app.get("*", (req,res)=>{
    res.send("404 ERROR");
})

app.get("/weather", (req,res)=>{
    res.send("welcome to my website's weather page ");
})


app.get("*", (req,res)=>{
    res.send("404 ERROR");
})

app.listen(port,()=>{
    console.log(`server runnig on port: ${port}`);
})