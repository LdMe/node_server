
import teamController from "./teamController.js";

const getAll =  async(req,res) => {
    let result = await teamController.getAll();
    if (result[0] === 0) {
        res.send(result[1]);
    }
    else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving teams."
        });
    }
};

const getById = async (req,res) => {
    let id = req.params.id;
    let result = await teamController.getById(id);
    if (result[0] === 0) {
        if (result[1] === null){
            res.status(404).send({
                message: `Cannot find team with id=${id}.`
            });
        }
        else {
            res.send(result[1]);
        }
    }
    else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving teams."
        });
    }

};

const create = async (req,res) => {
    let data ={
        name: req.body.name,
        idstadium: req.body.idstadium,
        idcaptain: req.body.idcaptain,
        creation_date: req.body.creation_date
    }
    let result = await teamController.create(data);
    if (result[0] === 0) {
        res.send(result[1]);
    }
    else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Some error occurred while creating teams."
        });
    }
};

const update = async (req,res) => {
    let data ={
        name: req.body.name,
        idstadium: req.body.idstadium,
        idcaptain: req.body.idcaptain,
        creation_date: req.body.creation_date
    }
    let idteam = req.params.id;
    let result = await teamController.update(data,idteam);
    if (result[0] === 0) {
        if (result[1] === 0){
            res.status(404).send({
                message: `Cannot find team with id=${idteam}.`
            });
        }
        else {
            res.send(result[1]);
        }
    }
    else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Some error occurred while updating teams."
        });
    }
}
const deletes = async(req,res) => {
    let idteam = req.params.id;
    let result = await teamController.deletes(idteam);
    if (result[0] === 0) {
        if (result[1] === 0){
            res.status(404).send({
                message: `Cannot find team with id=${idteam}.`
            });
        }
        else {
            res.send("Team was deleted successfully!");
        }
    }
    else {
        let error = result[1];
        res.status(500).send({
            message: error.message || "Some error occurred while deleting teams."
        });
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    deletes
}