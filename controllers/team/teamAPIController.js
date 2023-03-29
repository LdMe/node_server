import connection from "../../config/db.js";

const getAll =  (req,res) => {
    let sql = "SELECT *\
    FROM team"; 
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
    // return query
};

const getById = (req,res) => {
    let sql = "SELECT *\
    FROM team\
    WHERE idteam = ? ";
    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const create = (req,res) => {
    let creation_date = req.body.creation_date;
    let idstadium = req.body.idstadium;
    let idcaptain = req.body.idcaptain;
    
    let name = req.body.name;
    let sql = "INSERT INTO team (name,idstadium,idcaptain,creation_date)\
    VALUES (?,?,?,?)";
    connection.query(sql, [name,idstadium,idcaptain,creation_date], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const update = (req,res) => {
    let idstadium = req.body.idstadium;
    let name = req.body.name;
    let idcaptain = req.body.idcaptain;
    let idteam = req.params.id;
    let sql = "UPDATE team \
    SET idcaptain=?, name=?,idstadium=?\
    WHERE idteam=? ";
    connection.query(sql, [idcaptain,name,idstadium,idteam], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}
const deletes = (req,res) => {
    let idteam = req.params.id;
    let sql = "DELETE FROM team WHERE idteam=?";
    connection.query(sql, [idteam], (err, result) => {
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