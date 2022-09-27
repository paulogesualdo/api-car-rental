// É importado o controller de cars
const carsController = require('../controllers');

const getCars = {
  path: '/v1/cars',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: carsController.getCars,
  },
};

const getCarById = {
  path: '/v1/cars/{id}',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: carsController.getCarById,
  },
};

const postCar = {
  path: '/v1/cars',
  method: 'POST',
  config: {
    tags: ['api'],
    handler: carsController.postCar,
  },
};

const putCar = {
  path: '/v1/cars/{id}',
  method: 'PUT',
  config: {
    tags: ['api'],
    handler: carsController.putCar,
  },
};

const deleteCar = {
  path: '/v1/cars/{id}',
  method: 'DELETE',
  config: {
    tags: ['api'],
    handler: carsController.deleteCar,
  },
};

module.exports = {
  getCars,
  getCarById,
  postCar,
  putCar,
  deleteCar,
};
