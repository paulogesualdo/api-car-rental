const {
  getCars,
  postCar,
  getCarById,
  putCar,
  deleteCar,
} = require('./routes');

module.exports = [getCars, postCar, getCarById, putCar, deleteCar];
