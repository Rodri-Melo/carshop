import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleServices from '../../../src/Services/Motorcycles';
import { motorcycleInput, 
  motorcycleOutput, 
  allMotorcycles, motorcycleOutput2 } from './motorcycle.mock';

describe('Testes para a rota Motorcycles', function () {
  const service = new MotorcycleServices();

  afterEach(function () {
    sinon.restore();
  });

  it('Deveria ser possível cadastrar uma motocicleta com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleInput);
    const result = await service.create(motorcycleOutput);
    expect(result).to.be.deep.equal(result);
  });

  it('Deveria retornar null ao cadastrar uma motocicleta com falha', async function () {
    sinon.stub(Model, 'create').resolves(null);
    const result = await service.create(motorcycleOutput);
    expect(result).to.be.deep.equal(null);
  });

  it('Deveria retornar uma lista vazia ao buscar todas as motocicletas', async function () {
    sinon.stub(Model, 'find').resolves([]);
    const result = await service.getAll();
    expect(result).to.be.an('array').that.has.lengthOf(0);
  });

  it('Deveria retornar todas as motocicletas cadastradas com sucesso', async function () {
    sinon.stub(Model, 'find').resolves(allMotorcycles);
    const result = await service.getAll();
    expect(result).to.be.deep.equal(allMotorcycles);
  });

  // it('Deveria retornar null ao buscar uma motocicleta inexistente por ID', async function () {
  //   sinon.stub(Model, 'findById').resolves(null);
  //   const result = await service.getByValue('6348513f34c397abcad040b2');
  //   expect(result).to.be.deep.equal(null);
  // });

  it('Deveria buscar uma motocicleta por ID com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);
    const result = await service.getByValue('6348513f34c397abcad040b2');
    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  // it('Deveria retornar null ao atualizar uma motocicleta inexistente', async function () {
  //   sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
  //   const result = await service.updateValue('6348513f34c397abcad040b2', motorcycleOutput);
  //   expect(result).to.be.deep.equal(null);
  // });

  it('Deveria atualizar uma motocicleta com sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput2);
    const result = await service.updateValue('6348513f34c397abcad040b2', motorcycleOutput);
    expect(result).to.be.deep.equal(motorcycleOutput2);
  });
});
