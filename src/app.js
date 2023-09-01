const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");

const Register = require("./models/registers");



const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../templates/css");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/",(req, res) =>{
    
    res.render("index")
    // res.send("hello im the hell ")
});

app.get("/register",(rep,res)=>{
    res.render("register");
})

//create a new user in our database
app.post("/register", async (rep,res)=>{
    try {
        const registerEmploye = new Register({
            fullname:req.body.fullname,
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            gende:req.body.gender,
            dob:req.body.dob
         })
        const registerd =  await registerEmploye.save();
        res.status(201).render(index);

        } catch (error) {
            res.status(400).send(error);
    }
})

app.get("/login",(rep,res)=>{
    
    res.render("login",)
})

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})

// const { log } = require("console");
