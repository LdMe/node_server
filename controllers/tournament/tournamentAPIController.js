import Tournament from "../../models/tournament.js";
import Game from "../../models/game.js";
import Stadium from "../../models/stadium.js";
import Team from "../../models/team.js";

const getAll =  async(req,res) => {
    try {
        let tournament = await Tournament.findAll({
            attributes: ['idtournament','name'],
            include: [
                {
                    model: Game,
                    attributes: ['idgame','name','datetime'],
                    as: 'games',
                    include: [
                        {
                            model: Stadium,
                            attributes: ['idstadium','name'],
                            as: 'stadium'
                        },
                        {
                            model: Team,
                            attributes: ['idteam','name'],
                            through: {
                                attributes: ['position']
                            },
                            as: 'teams',
                        }
                    ]
                }
            ]
        });
        res.send(tournament);
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving tournaments."
        });
    }
}

const getById = async(req,res) => {
    try {
        let id = req.params.id;
        let tournament = await Tournament.findByPk(id,{
            attributes: ['idtournament','name'],
            include: [
                {
                    model: Game,
                    attributes: ['idgame','name','datetime'],
                    as: 'games',
                    include: [
                        {
                            model: Stadium,
                            attributes: ['idstadium','name'],
                            as: 'stadium'
                        },
                        {
                            model: Team,
                            attributes: ['idteam','name'],
                            as: 'teams'
                        },
                        
                    ]
                }
            ]
        });
        if (!tournament) {
            res.status(404).send({
                message: `Cannot find tournament with id=${id}.`
            });
        }
        else {
            res.send(tournament);
        }
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving tournaments."
        });
    }
}

const create = async(req,res) => {
    try {
        let tournament = await Tournament.create({
            name: req.body.name
        });
        res.send(tournament);
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the tournament."
        });
    }
}

const update = async(req,res) => {
    try {
        let id = req.params.id;
        let tournament = await Tournament.update(req.body, {
            where: { idtournament: id }
        });
        if (!tournament) {
            res.status(404).send({
                message: `Cannot update tournament with id=${id}. Maybe tournament was not found!`
            });
        }
        else {
            res.send({
                message: "Tournament was updated successfully."
            });
        }
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while updating the tournament."
        });
    }
}

const deletes = async(req,res) => {
    try {
        let id = req.params.id;
        let tournament = await Tournament.destroy({
            where: { idtournament: id }
        });
        if (!tournament) {
            res.status(404).send({
                message: `Cannot delete tournament with id=${id}. Maybe tournament was not found!`
            });
        }
        else {
            res.send({
                message: "Tournament was deleted successfully!"
            });
        }
    }
    catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while deleting the tournament."
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