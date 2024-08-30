const express = require("express");
const { env } = require("process");
const app = express();
const cookieparser = require("cookie-parser");

require('dotenv').config();

const indexRouter = require("./routes/indexRouter");
const hisaabRouter = require("./routes/hisaabRouter");
const db = require("./config/mongoose-connection");
const path = require("path");

const flash = require("connect-flash");
const expressSession = require("express-session");

app.use(expressSession({
    secret: 'anmolpandey', // Replace with a secure key
    resave: false,
    saveUninitialized: true
}));

app.use(flash());




app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieparser());

app.use("/",indexRouter);
app.use("/hisaab",hisaabRouter);




process.on('uncaughtException',()=>{
    console.log("errorr")
})
const port = 3000

app.listen(3000, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});
