import connection from "../../config/db.js";

const getAll =  (req,res) => {
    let sql = "SELECT game.name,datetime,stadium.name as stadium, tournament.name as tournament\
    FROM game\
    LEFT JOIN stadium \
    ON game.idstadium = stadium.idstadium\
    LEFT JOIN tournament \
    ON game.idtournament = tournament.idtournament\
    "; 
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
    // return query
};

const getById = (req,res) => {
    let sql = "SELECT game.name,datetime,stadium.name as stadium, tournament.name as tournament\
    FROM game\
    LEFT JOIN stadium \
    ON game.idstadium = stadium.idstadium\
    LEFT JOIN tournament \
    ON game.idtournament = tournament.idtournament\
    WHERE idgame = ? ";
    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const create = (req,res) => {
    let datetime = req.body.datetime;
    let idstadium = req.body.idstadium;
    let idtournament = req.body.idtournament;
    let name = req.body.name;
    let sql = "INSERT INTO game (name,idstadium,idtournament,datetime)\
    VALUES (?,?,?,?)";
    connection.query(sql, [name,idstadium,idtournament,datetime], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const update = (req,res) => {
    let datetime = req.body.datetime;
    let idstadium = req.body.idstadium;
    let idtournament = req.body.idtournament;
    let name = req.body.name;
    let idgame = req.params.id;
    let sql = "UPDATE game \
    SET name=?, datetime=?,idstadium=?,idtournament=?\
    WHERE idgame=? ";
    connection.query(sql, [name,datetime,idstadium,idtournament,idgame], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}
const deletes = (req,res) => {
    let idgame = req.params.id;
    let sql = "DELETE FROM game WHERE idgame=?";
    connection.query(sql, [idgame], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

export default {
    getAll,
    getById,
    create,
    update,
    deletes
}