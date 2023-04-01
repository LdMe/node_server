import { Router } from "express";
import {isAuthorized,isAdmin} from "../../middlewares/auth.js";
import playerController from "../../controllers/player/playerViewController.js";

const router = Router();

router.get("/", (req, res) => {
  playerController.getAll(req,res);
  //res.send("Mostrar todos los jugadores");
});


router.get("/player/:id", (req, res) => {
  playerController.getById(req,res);
  //res.send("Mostrar un jugador con id "+req.params.id);
});

router.get("/new", isAuthorized, (req, res) => {
    playerController.createForm(req,res);
});

router.post("/", isAuthorized,(req,res)=> {
    playerController.create(req,res);
    //res.send("Crear un nuevo jugador");
});

router.get("/player/edit/:id",isAdmin, (req, res) => {
    playerController.updateForm(req,res);
    //res.send("Mostrar un jugador con id "+req.params.id);
});

router.post("/player/edit/:id",isAdmin, (req,res) =>{
    playerController.update(req,res);
    //res.send("Modificar un jugador con id "+req.params.id);
})

router.post("/player/delete/:id",isAdmin, (req,res) => {
  playerController.deletes(req,res);
  //res.send("Eliminar un jugador con id "+req.params.id);
})

export default router;
