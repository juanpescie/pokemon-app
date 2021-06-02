/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  id: "006a1891-d70e-4b2a-9d8a-bdeb91b53c3d",
  name: 'Pikachu',
  height: 10,
  speed: 10,
  attack: 10,
  defense: 30,
  weight: 10,
  health: 58
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));


  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons/:id', () => {
    it('deberia devolver status 200 si matchea el id', () =>{
      agent.get('/pokemons/006a1891-d70e-4b2a-9d8a-bdeb91b53c3d').expect(200)
    });
    it('deberia devolver 200 si busca en la api', () =>{
      agent.get('/pokemons/2').expect(200)
    });
    it('deberia devolver 404 si no encuentra ninguno con ese id', () =>{
      agent.get('/pokemons/cdvbgnhmgfdsdbgfsddvbgfv').expect(404)
    });

  });
});
