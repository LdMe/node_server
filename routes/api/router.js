import { Router } from "express";
import playerRouter from "./player.js";
import gameRouter from "./game.js";
import stadiumRouter from "./stadium.js";
import teamRouter from "./team.js";
import tournamentRouter from "./tournament.js";
import userRouter from "./user.js";
const router = Router();

router.use("/players", playerRouter);
router.use("/games", gameRouter);
router.use("/teams", teamRouter);
router.use("/stadiums", stadiumRouter);
router.use("/tournaments", tournamentRouter);
router.use("/users", userRouter);



export default router;


