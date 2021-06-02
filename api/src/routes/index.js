const { Router } = require('express');
const pokemonroute = require("./pokemonroute")
const typeroute = require("./typeroute")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", pokemonroute)
router.use("/types", typeroute)


module.exports = router;
