
import playerController from "./playerController.js";

import teamController from "../team/teamController.js";

const getAll = async (req,res) => {
    let result = await playerController.getAll();
    if (result[0] === 0) {
        res.render('player/list',{players: result[1]});
    } else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving players."
        });
    }
};


const getById = async (req,res) => {
    let id = req.params.id;
    let result = await playerController.getById(id);
    if (result[0] === 0) {
        let player = result[1];
        if (!player) {
            res.status(404).send({
                message: `Cannot find player with id=${id}.`
            });
        } else {
            res.send(player);
        }
    }
    else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving players."
        });
    }
};

const createForm = async (req,res) => {
    let results = await teamController.getAll();
    let error = req.query.error;
    if (results[0] === 1 || results[1] === []) {
        console.log(results[1]);
        res.render("player/new",{error:error});
    }
    else{
        let teams = results[1];
        res.render("player/new",{teams:teams,error:error});
    }
}

const create = async (req,res) => {
        let data = {
            name: req.body.name === "" ? null : req.body.name,
            last_name: req.body.last_name === "" ? null : req.body.last_name,
            age: req.body.age,
            idteam: req.body.idteam == 0 ? null : req.body.idteam
        }
        let result = await playerController.create(data);
        if (result[0] === 0) {
            res.redirect("/players");
        } else {
            let error = result[1];
            let errorUri = encodeURIComponent(error.message);
            res.redirect(`/players/new?error=${errorUri}`);
        }
}

const update = async (req,res) => {
        let data ={
             name : req.body.name,
             last_name: req.body.last_name,
             age : req.body.age,
             idteam : req.body.idteam
        }
        let idplayer = req.params.id;
        // opcion 1
        let result = await playerController.update(data,idplayer);
        if (result[0] === 0) {
            res.send(result[1]);
        } else {
            let error = result[1];
            res.status(500).send({
                message: error.message || "Some error occurred while updating a player."
            });
        }
}

const deletes = async (req,res) => {
    let idplayer = req.params.id;
    let result = await playerController.deletes(idplayer);
    res.redirect("/players");
}

export default {
    getAll,
    getById,
    createForm,
    create,
    update,
    deletes,
}