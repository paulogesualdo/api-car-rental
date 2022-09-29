// É importado o módulo Joi que auxilia nos parâmetros das rotas
// para que possa ser documentado corretamente no Swagger
const Joi = require('joi');

// É importado o controller de cars
const carsController = require('../controllers');

const getCars = {
  path: '/v1/cars',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: carsController.getCars,
    description: 'Obter carros',
    notes: 'Obtém todos carros que estão cadastrados na base de dados',
  },
};

const getCarById = {
  path: '/v1/cars/{id}',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: carsController.getCarById,
    description: 'Obter carro por id',
    notes: 'Obtém o carro cujo id é passado como parâmetro',
    validate: {
      params: Joi.object({
        id: Joi.string().required(),
      }),
    },
  },
};

const postCar = {
  path: '/v1/cars',
  method: 'POST',
  config: {
    tags: ['api'],
    handler: carsController.postCar,
    description: 'Cadastrar carro',
    notes: 'Cadastra o carro cujos dados são passados no corpo da requisição',
    validate: {
      payload: Joi.object({
        name: Joi.string().required(),
        brand: Joi.string().required(),
        description: Joi.string().required(),
        dailyRate: Joi.number().required(),
        categoryId: Joi.string().required(),
        available: Joi.boolean().required(),
        licensePlate: Joi.string().required(),
      }),
    },
  },
};

const putCar = {
  path: '/v1/cars/{id}',
  method: 'PUT',
  config: {
    tags: ['api'],
    handler: carsController.putCar,
    description: 'Modificar carro',
    notes: 'Modifica o carro cujo id é passado como parâmetro e os dados são passados no corpo da requisição',
    validate: {
      params: Joi.object({
        id: Joi.string().required(),
      }),
      payload: Joi.object({
        name: Joi.string().required(),
        brand: Joi.string().required(),
        description: Joi.string().required(),
        dailyRate: Joi.number().required(),
        categoryId: Joi.string().required(),
        available: Joi.boolean().required(),
        licensePlate: Joi.string().required(),
      }),
    },
  },
};

const deleteCar = {
  path: '/v1/cars/{id}',
  method: 'DELETE',
  config: {
    tags: ['api'],
    handler: carsController.deleteCar,
    description: 'Excluir carro',
    notes: 'Exclui o carro cujo id é passado como parâmetro',
    validate: {
      params: Joi.object({
        id: Joi.string().required(),
      }),
    },
  },
};

module.exports = {
  getCars,
  getCarById,
  postCar,
  putCar,
  deleteCar,
};
