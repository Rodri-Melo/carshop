import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import CarsServices from '../../../src/Services/Cars';
import { carInput, carOutput, allCars, carOutput2 } from './car.mock';

describe('Testes para a rota Cars', function () {
  const service = new CarsServices();

  afterEach(function () {
    sinon.restore();
  });

  it('Deveria ser possível cadastrar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carInput);
    const result = await service.create(carOutput);
    expect(result).to.be.deep.equal(result);
  });

  it('Deveria retornar null ao cadastrar um carro com falha', async function () {
    sinon.stub(Model, 'create').resolves(null);
    const result = await service.create(carOutput);
    expect(result).to.be.deep.equal(null);
  });

  it('Deveria retornar uma lista vazia ao buscar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves([]);
    const result = await service.getAll();
    expect(result).to.be.an('array').that.has.lengthOf(0);
  });

  it('Deveria retornar todos os carros cadastrados com sucesso', async function () {
    sinon.stub(Model, 'find').resolves(allCars);
    const result = await service.getAll();
    expect(result).to.be.deep.equal(allCars);
  });

  // it('Deveria retornar null ao buscar um carro inexistente por ID', async function () {
  //   sinon.stub(Model, 'findById').resolves(null);
  //   const result = await service.getByValue('6348513f34c397abcad040b2');
  //   expect(result).to.be.deep.equal(null);
  // });

  it('Deveria buscar um carro por ID com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);
    const result = await service.getByValue('6348513f34c397abcad040b2');
    expect(result).to.be.deep.equal(carOutput);
  });

  // it('Deveria retornar null ao atualizar um carro inexistente', async function () {
  //   sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
  //   const result = await service.updateValue('6348513f34c397abcad040b2', carOutput);
  //   expect(result).to.be.deep.equal(null);
  // });

  it('Deveria atualizar um carro com sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput2);
    const result = await service.updateValue('6348513f34c397abcad040b2', carOutput);
    expect(result).to.be.deep.equal(carOutput2);
  });
});
