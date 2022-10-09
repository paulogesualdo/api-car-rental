// É importado o módulo Joi que auxilia nos parâmetros das rotas
// para que possa ser documentado corretamente no Swagger
const Joi = require('joi');

const controller = require('../controllers');

const getCars = {
  path: '/v1/cars',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.getCars,
  },
};

const getCarById = {
  path: '/v1/cars/{id}',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.getCarById,
  },
};

const postCar = {
  path: '/v1/cars',
  method: 'POST',
  config: {
    tags: ['api'],
    handler: controller.postCar,
  },
};

const putCar = {
  path: '/v1/cars/{id}',
  method: 'PUT',
  config: {
    tags: ['api'],
    handler: controller.putCar,
  },
};

const deleteCar = {
  path: '/v1/cars/{id}',
  method: 'DELETE',
  config: {
    tags: ['api'],
    handler: controller.deleteCar,
  },
};

const getCategories = {
  path: '/v1/categories',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.getCategories,
    description: 'Obter categorias',
    notes: 'Obtém todas as categorias que estão cadastradas na base de dados'
  },
};

const getCategoryById = {
  path: '/v1/categories/{id}',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.getCategoryById,
    description: 'Obter categoria por id',
    notes: 'Obtém a categoria cujo id é passado como parâmetro',
    validate: {
      params: Joi.object({
        id: Joi.string().required(),
      }),
    },
  },
};

const postCategory = {
  path: '/v1/categories',
  method: 'POST',
  config: {
    tags: ['api'],
    handler: controller.postCategory,
    description: 'Cadastrar categoria',
    notes: 'Cadastra as categorias cujos dados são passados no corpo da requisição',
    validate: {
      payload: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
      }),
    },
  },
};

const putCategory = {
  path: '/v1/categories/{id}',
  method: 'PUT',
  config: {
    tags: ['api'],
    handler: controller.putCategory,
    description: 'Modificar categoria',
    notes: 'Modifica a categoria cujo id é passado como parâmetro e os dados são passados no corpo da requisição',
    validate: {
      params: Joi.object({
        id: Joi.string().required(),
      }),
      payload: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
      }),
    },
  },
};

const deleteCategory = {
  path: '/v1/categories/{id}',
  method: 'DELETE',
  config: {
    tags: ['api'],
    handler: controller.deleteCategory,
    description: 'Excluir categoria',
    notes: 'Exclui a categoria cujo id é passado como parâmetro',
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

  getCategories,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategory,

};
