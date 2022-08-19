const pool = require("../../db");
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers,  (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUsers = (req, res) => {
    const {name, email,password} = req.body;
    pool.query(queries.checkEmailExists, [email], (error,results) =>{
        if (results && results.rows.length > 0) {
            res.send("Email already exists.");
        };

        if(!req.body){
            res.send("Could not found Requset Body"),
        }
        pool.query(queries.addUsers, [name, email, password], (error, results) => {
            if (error) throw error;
            res.status(201).send("Users created succesfully");
        });
    });    
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getUsers,
    addUsers,
    getUsersById,
};