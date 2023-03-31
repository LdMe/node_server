import { Router } from "express";
import isAuthorized from "../../middlewares/auth.js";
import { authenticate } from "../../middlewares/auth.js";
import userController from "../../controllers/user/userController.js";

const router = Router();

router.get("/", (req, res) => {
    userController.getAll(req,res);
    //res.send("Mostrar todos los equipos");
    }
);

router.get("/user/:id", (req, res) => {
    userController.getById(req,res);
    //res.send("Mostrar un equipo con id "+req.params.id);
}
);

router.post("/", (req,res)=> {
    userController.create(req,res);
    //res.send("Crear un nuevo equipo");
}
);

router.put("/user/:id", isAuthorized, (req,res) =>{
    userController.update(req,res);
    //res.send("Modificar un equipo con id "+req.params.id);
}
)

router.delete("/user/:id", isAuthorized, (req,res) => {
    userController.deletes(req,res);
    //res.send("Eliminar un equipo con id "+req.params.id);
});

router.get("/login", (req, res) => {
    userController.loginForm(req,res);
});

router.post("/login",(req, res) => {
    userController.login(req,res);
    //res.send("Eliminar un equipo con id "+req.params.id);
});

export default router;