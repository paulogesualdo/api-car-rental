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
  },
};

const getCategoryById = {
  path: '/v1/categories/{id}',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.getCategoryById,
  },
};

const postCategory = {
  path: '/v1/categories',
  method: 'POST',
  config: {
    tags: ['api'],
    handler: controller.postCategory,
  },
};

const putCategory = {
  path: '/v1/categories/{id}',
  method: 'PUT',
  config: {
    tags: ['api'],
    handler: controller.putCategory,
  },
};

const deleteCategory = {
  path: '/v1/categories/{id}',
  method: 'DELETE',
  config: {
    tags: ['api'],
    handler: controller.deleteCategory,
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
