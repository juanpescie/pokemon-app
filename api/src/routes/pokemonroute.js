const { Router } = require('express');
const {Pokemon, Type} = require("../db");
const getById = require("./getById");
const addPokemon = require("./addPokemon")
const getByName = require("./getByName")
const axios = require("axios");
const getAllPokemons = require('./getAllPokemons');
const router = Router();

router.get("/:idPokemon", getById)
router.post("/", addPokemon )
router.get("/",getByName )
router.get("/", getAllPokemons)

module.exports = router;