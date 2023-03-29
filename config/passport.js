/*
File to configure passport

*/

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/user.js';

const localStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {
    const user = await User.findOne({ email: email });
    if (!user) { return done(null, false); }
    if (!user.verifyPassword(password)) { return done(null, false); }
    passport.serializeUser(user, (err, serializedUser) => {
        return done(err, serializedUser);
    });
});

export default localStrategy;



