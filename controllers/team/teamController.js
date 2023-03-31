import Team from "../../models/team.js"

const getAll =  async () => {
    try{
        let teams = await Team.findAll({
            attributes: ['idteam','name']
        });
        return [0,teams];
    } catch (error) {
        return [1,error];
    }
};

const getById = async (id) => {
    try {
        let team = await Team.findByPk(id,{
            attributes: ['idteam','name']
        });
        return [0,team];
    } catch (error) {
        return [1,error];
    }
};

const create = async (data) => {
    try {
        let team = await Team.create(data);
        return [0,team];
    } catch (error) {
        return [1,error];
    }
};

const update = async (data,idteam) => {
    try {
        let team = await Team.update(data,{
            where: {
                idteam: idteam
            }
        });
        return [0,team];
    } catch (error) {
        return [1,error];
    }
}

const deletes = async (idteam) => {
    try {
        let team = await Team.destroy({
            where: {
                idteam: idteam
            }
        });
        return [0,team];
    } catch (error) {
        return [1,error];
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    deletes
}