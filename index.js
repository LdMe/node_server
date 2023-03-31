import express from "express";
import routerAPI from "./routes/api/router.js"
import routerView from "./routes/views/router.js"
import dotenv from "dotenv";
import express_session from "express-session";
import passport from "passport";
import localStrategy from "./config/passport.js";

dotenv.config();
const app = express();

app.use(express.static("css"));
app.use(express_session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(localStrategy);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');


app.use("/api", routerAPI);
app.use("/", routerView);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



