const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

//public static path
// console.log(path.join(__dirname,"../public"));
const static_path =path.join(__dirname,"../public")

app.set('view engine','hbs')
app.use(express.static(static_path));




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