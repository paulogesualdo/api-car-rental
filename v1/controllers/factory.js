const carsController = require('./carsController');
const commons = require('../../commons');

module.exports = ({ adapters, config }) => ({
  getCars: carsController({ config, commons, adapters }).getCars,
  getCarById: carsController({ config, commons, adapters }).getCarById,
  postCar: carsController({ config, commons, adapters }).postCar,
  putCar: carsController({ config, commons, adapters }).putCar,
  deleteCar: carsController({ config, commons, adapters }).deleteCar,
});
