import jwt from 'jsonwebtoken';
import passport from 'passport';

const isAuthorized = (req,res,next) => {
    const password = req.body.password;
    if (password === "mi-contraseña"){
        next();
    }
    else{
        res.send("No tienes autorización para esta acción");
    }
}

const isAuthorized34 = (req,res,next) => {
    let token = req.headers.authorization;
    if (token){
        token = token.replace('Bearer ', '');
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err){
                res.status(401).json({ message: 'Token inválido.' });
            }
            else{
                req.decoded = decoded; // Guardamos el payload del token en la request para usarlo en las rutas que lo necesiten
                next();
            }
        });
    }
    else{
        res.status(401).json({ message: 'No se ha enviado un token.' });
    }
}

const isAuthorized22 = (req,res,next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

export const authenticate = (req, res, next) => {
    // autenticacion con passport, si falla se enviará un error 401, si no, se llamará al siguiente middleware
    passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/api/users/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return next();
    });
  })(req, res, next);
}

export default isAuthorized;