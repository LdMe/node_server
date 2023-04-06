
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/user.js';

const localStrategy = new LocalStrategy({ // Creamos una nueva estrategia de autenticación local
    usernameField: 'username', // El campo de usuario es username
    passwordField: 'password', // El campo de contraseña es password
    session: true // La sesión se guarda en la cookie

}, async (username, password, done) => { // Función que se ejecuta cuando se realiza la autenticación
    const user = await User.findOne({ username: username }); // Buscamos el usuario en la base de datos
    if (!user) { return done(null, false); } // Si no existe el usuario, devolvemos un error
    if (!user.verifyPassword(password)) { return done(null, false); } // Si la contraseña no es correcta, devolvemos un error
    passport.serializeUser(user, (err, serializedUser) => { // Si el usuario existe y la contraseña es correcta, devolvemos el usuario
        return done(err, serializedUser); 
    });
});


passport.serializeUser(function(user, cb) { // Función que se ejecuta cuando se guarda el usuario en la sesión
  process.nextTick(function() { // Se ejecuta en el siguiente ciclo de eventos
    cb(null, { id: user.id, username: user.username, role: user.role }); // Devolvemos el usuario serializado (solo el id, el nombre de usuario y el rol)
  });
});

passport.deserializeUser(function(user, cb) { // Función que se ejecuta cuando se recupera el usuario de la sesión
  process.nextTick(function() { // Se ejecuta en el siguiente ciclo de eventos
    return cb(null, user); // Devolvemos el usuario
  });
});

passport.use(localStrategy); // Añadimos la estrategia de autenticación local

export default passport;



