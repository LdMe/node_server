import express from "express";
import router from "./routes/router.js"


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');


app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


