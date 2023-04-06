import { Router } from "express";
import {isAuthorized} from "../../middlewares/auth.js";
import gameController from "../../controllers/game/gameAPIController.js";

const router = Router();

router.get("/", (req, res) => {
  gameController.getAll(req,res);
  //res.send("Mostrar todos los juegos");
});

router.get("/:id", (req, res) => {
  gameController.getById(req,res);
  //res.send("Mostrar un juego con id "+req.params.id);
});

router.post("/",  isAuthorized,(req,res)=> {
  gameController.create(req,res);
});

router.put("/:id", isAuthorized, (req,res) =>{
  gameController.update(req,res);
})

router.delete("/:id", isAuthorized, (req,res) => {
  gameController.deletes(req,res);
})

export default router;
