import connection from "../config/orm.js";
import Sequelize from "sequelize";

const Team_has_game = connection.define('team_has_game', {
    idteam: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        unsigned: true,
        references: {
            model: 'team',
            key: 'idteam'
        }
    },
    idgame: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        unsigned: true,
        references: {
            model: 'game',
            key: 'idgame'
        }
    },
    position : {
        type: Sequelize.INTEGER,
        allowNull: true,
        unsigned: true
    }
},
{
    freezeTableName: true,
    timestamps: false
});

export default Team_has_game;

