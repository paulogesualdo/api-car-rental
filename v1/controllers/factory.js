const carsController = require('./carsController');
const categoriesController = require('./categoriesController');
const commons = require('../../commons');

module.exports = ({ adapters, config }) => ({

  getCars: carsController({ config, commons, adapters }).getCars,
  getCarById: carsController({ config, commons, adapters }).getCarById,
  getCarsByCategoryId: carsController({ config, commons, adapters }).getCarsByCategoryId,
  getCarsByAvailability: carsController({ config, commons, adapters }).getCarsByAvailability,  
  getCarsByDescription: carsController({ config, commons, adapters }).getCarsByDescription, 
  postCar: carsController({ config, commons, adapters }).postCar,
  putCar: carsController({ config, commons, adapters }).putCar,
  deleteCar: carsController({ config, commons, adapters }).deleteCar,

  getCategories: categoriesController({ config, commons, adapters }).getCategories,
  getCategoryById: categoriesController({ config, commons, adapters }).getCategoryById,
  postCategory: categoriesController({ config, commons, adapters }).postCategory,
  putCategory: categoriesController({ config, commons, adapters }).putCategory,
  deleteCategory: categoriesController({ config, commons, adapters }).deleteCategory,

});
