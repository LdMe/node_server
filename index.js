
import express from "express";
import routerAPI from "./routes/api/router.js"
import routerView from "./routes/views/router.js"
import express_session from "express-session";
import passport from "./config/passport.js";


const app = express(); // Creamos una aplicación de express

app.use(express.static("public")); // Indicamos que la carpeta public es estática, es decir, que se puede acceder a sus recursos sin necesidad de pasar por el servidor
app.use(express_session({ // Configuramos la sesión mediante express-session, que es un middleware que nos permite gestionar las sesiones de los usuarios
  secret: "lima", // Clave secreta para firmar la cookie
  resave: false, // Indica si se debe guardar la sesión aunque no se haya modificado
  saveUninitialized: false // Indica si se debe guardar una sesión nueva aunque no se haya inicializado
}));


app.use(passport.initialize()); // Inicializamos passport
app.use(passport.session()); // Inicializamos passport para que utilice las sesiones

app.use(express.json()); // Indicamos que vamos a utilizar JSON
app.use(express.urlencoded({ extended: true })); // Indicamos que vamos a utilizar datos codificados en la URL


app.set('view engine', 'pug'); // Indicamos que vamos a utilizar el motor de plantillas Pug


app.use("/api", routerAPI); // Indicamos que todas las rutas que empiecen por /api se gestionarán mediante el routerAPI
app.use("/", routerView); // Indicamos que todas las rutas que empiecen por / se gestionarán mediante el routerView

app.listen(3000, () => { // Indicamos que el servidor escuche en el puerto 3000
  console.log("Server is running on port 3000");
});



