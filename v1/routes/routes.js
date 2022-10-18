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
    description: 'Obter carros',
    notes: 'Obtém todos carros que estão cadastrados na base de dados',
  },
};

const getCarById = {
  path: '/v1/cars/{id}',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.getCarById,
    description: 'Obter carro por id',
    notes: 'Obtém o carro cujo id é passado como parâmetro',
    validate: {
      params: Joi.object({
        id: Joi.string().required(),
      }),
    },
  },
};

const getCarsByCategoryId = {
  path: '/v1/cars/categories/{id}',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.getCarsByCategoryId,
    description: 'Obter carros pelo id da categoria',
    notes: 'Obtém os carros cujo id da categoria é passado como parâmetro',
    validate: {
      params: Joi.object({
        id: Joi.string().required(),
      }),
    },
  },
};

const getCarsByAvailability = {
  path: '/v1/cars/available/{available}',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.getCarsByAvailability,
    description: 'Obter carros pela disponibilidade',
    notes: 'Obtém os carros cuja disponibilidade é passada como parâmetro (true ou false)',
    validate: {
      params: Joi.object({
        available: Joi.boolean().required(),
      }),
    },
  },
};

const getCarsByDescription = {
  path: '/v1/cars/description/{description}',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.getCarsByDescription,
    description: 'Obter carros pela descrição',
    notes: `Obtém os carros que contém uma palavra, várias palavras ou uma frase na descrição.
Se for uma palavra, a mesma deve ser passada como parâmetro. Exemplo: vermelho
Se forem duas ou mais palavras, as mesmas devem ser passadas como parâmetro separadas por "&". Exemplo: vermelho&automático
Se for uma frase, a mesma deve ser passada como parâmetro, iniciando e finalizando com " e com palavras separadas por "+". Exemplo: "Ar:&Automático"`,
    validate: {
      params: Joi.object({
        description: Joi.string().required(),
      }),
    },
  },
};

const postCar = {
  path: '/v1/cars',
  method: 'POST',
  config: {
    tags: ['api'],
    handler: controller.postCar,
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
    handler: controller.putCar,
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
    handler: controller.deleteCar,
    description: 'Excluir carro',
    notes: 'Exclui o carro cujo id é passado como parâmetro',
    validate: {
      params: Joi.object({
        id: Joi.string().required(),
      }),
    },
  },
};

const getCategories = {
  path: '/v1/categories',
  method: 'GET',
  config: {
    tags: ['api'],
    handler: controller.getCategories,
    description: 'Obter categorias',
    notes: 'Obtém todas as categorias que estão cadastradas na base de dados',
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
  getCarsByCategoryId,
  getCarsByAvailability,
  getCarsByDescription,
  postCar,
  putCar,
  deleteCar,

  getCategories,
  getCategoryById,
  postCategory,
  putCategory,
  deleteCategory,

};
