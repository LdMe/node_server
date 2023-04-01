import { Router } from "express";
import {isAuthorized,isAdmin} from "../../middlewares/auth.js";
import userController from "../../controllers/user/userController.js";

const router = Router();

router.get("/",isAuthorized, (req, res) => {
    userController.getAll(req,res);
    //res.send("Mostrar todos los equipos");
    }
);

router.get("/user/:id",isAuthorized, (req, res) => {
    userController.getById(req,res);
    //res.send("Mostrar un equipo con id "+req.params.id);
}
);

router.get("/user/edit/:id",isAdmin, (req, res) => {
    userController.updateForm(req,res);
    //res.send("Mostrar un equipo con id "+req.params.id);
});

router.post("/", (req,res)=> {
    userController.create(req,res);
    //res.send("Crear un nuevo equipo");
}
);

router.post("/user/edit/:id", isAdmin, (req,res) =>{
    userController.update(req,res);
    //res.send("Modificar un equipo con id "+req.params.id);
}
)

router.delete("/user/:id", isAdmin, (req,res) => {
    userController.deletes(req,res);
    //res.send("Eliminar un equipo con id "+req.params.id);
});


export default router;