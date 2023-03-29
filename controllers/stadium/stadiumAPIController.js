import Stadium from "../../models/stadium.js";
import Team from "../../models/team.js";

const getAll = async (req,res) => {
    try {
        let stadiums = await Stadium.findAll({
            attributes: ['idstadium','name','capacity'],
            include: [
                {
                    model: Team,
                    attributes: ['idteam','name','creation_date'],
                    as: 'teams'
                }
            ]
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving teams."
        });
    }
};

const getById = async (req,res) => {
    try {
        let id = req.params.id;
        let team = await Team.findByPk(id,{
            attributes: ['idteam','name','creation_date'],
            include: [
                {
                    model: Stadium,
                    attributes: ['idstadium','name','capacity'],
                    as: 'stadium'
                }
            ]
        });
        if (!team) {
            res.status(404).send({
                message: `Cannot find team with id=${id}.`
            });
        } else {
            res.send(team);
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving teams."
        });
    }
};

const create = async (req,res) => {
    try {
        let team = await Team.create({
            name: req.body.name,
            creation_date: req.body.creation_date,
            idcaptain: req.body.idcaptain,
            idstadium: req.body.idstadium
        });
        res.send(team);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the team."
        });
    }
};

const update = async (req,res) => {
    try {
        let id = req.params.id;
        let team = await Team.update({
            name: req.body.name,
            creation_date: req.body.creation_date,
            idcaptain: req.body.idcaptain,
            idstadium: req.body.idstadium
        }, {
            where: {
                idteam: id
            }
        });
        res.send(team);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while updating the team."
        });
    }
};

const deletes = async (req,res) => {
    try {
        let id = req.params.id;
        let team = await Team.destroy({
            where: {
                idteam: id
            }
        });
        if (team == 1) {
            res.send({
                message: "Team was deleted successfully!"
            });
        }
        else {
            res.send({
                message: `Cannot delete team with id=${id}. Maybe team was not found!`
            });
        }
        
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while deleting the team."
        });
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    deletes
};