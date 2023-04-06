import { Router } from "express";
import {isAuthorized,isAdmin} from "../../middlewares/auth.js";
import playerRouter from "./player.js";
/* import gameRouter from "./game.js";
import stadiumRouter from "./stadium.js";
import teamRouter from "./team.js";
import tournamentRouter from "./tournament.js"; */
import userRouter from "./user.js";
import authRouter from "./auth.js";

const router = Router();

router.use("/players", playerRouter);
router.use("/users",isAuthorized, userRouter);
router.use("/", authRouter);
router.get("/", (req, res) => {
    const auth = req.user;
    res.render("index", {auth});
});
/* router.use("/games", gameRouter);
router.use("/teams", teamRouter);
router.use("/stadiums", stadiumRouter);
router.use("/tournaments", tournamentRouter); */


export default router;


