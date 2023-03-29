import express from "express";
import routerAPI from "./routes/api/router.js"
import routerView from "./routes/views/router.js"


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');


app.use("/api", routerAPI);
app.use("/", routerView);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



