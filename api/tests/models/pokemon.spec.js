const { Type, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Type model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validacion del modelo Type ', () => {
    beforeEach(() => Type.sync({ force: true }));
    describe('name', () => {
      it('debe tirar error si el name es null', (done) => {
        Type.create({})
          .then(() => done(new Error('name no puede ser nulo ')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Type.create({ name: 'pasto' })
        .then(()=>{
          return Type.findOne({where:{name: "pasto" }})
        })
        .then(respuesta=>{
          expect(respuesta.toJSON().name).to.equal("pasto")
        })
      });
    });
  });
});
