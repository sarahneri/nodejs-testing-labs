const Service = require('./service');
const assert = require('assert');
const BASE_URL_1 = 'https://swapi.dev/api/planets/1/';
const BASE_URL_2 = 'https://swapi.dev/api/planets/2/';
const sinon = require('sinon');
const { createSandbox } = sinon;
const sandbox = createSandbox();

const mocks = {
    alderaan: require('./mocks/alderaan.json'),
    tatooine: require('./mocks/tatooine.json'),
};

;(async () => {
    const service = new Service();
    const stub = sandbox.stub(service, service.makeRequest.name);

    stub
        .withArgs(BASE_URL_1)
        .resolves(mocks.tatooine);

    stub
        .withArgs(BASE_URL_2)
        .resolves(mocks.alderaan);

    const expectedTatooine = {
        name: 'Tatooine',
        surface_water: '1',
        appearedIn: 5
    };

    const expectedAlderaan = {
        name: 'Alderaan',
        surface_water: '40',
        appearedIn: 2
    };

    const result1 = await service.getPlanets(BASE_URL_1);
    assert.deepEqual(result1, expectedTatooine);

    const result2 = await service.getPlanets(BASE_URL_2);
    assert.deepEqual(result2, expectedAlderaan);

    sandbox.restore();
})();