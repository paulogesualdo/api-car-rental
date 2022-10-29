const category1 = {
  name: 'Grupo A',
  description: 'Veículo similar a: Fiat Uno 1.0.',
};

const editedCategory1 = {
  name: 'Grupo A - Compacto (ECMN)',
  description: 'Veículo similar a: Fiat Uno 1.0, dentre outros.',
};

const category2 = {
  name: 'Grupo B - Compacto Com Ar (ECMR)',
  description: 'Veículo similar a: Fiat Mobi 1.0, Fiat Uno 1.0, Renault Kwid 1.0, dentre outros.',
};

const category3 = {
  name: category1.name,
  description: category2.description,
};

const category4 = {
  name: category2.name,
  description: category1.description,
};

const car1 = {
  name: 'Uno',
  brand: 'Fia',
  description: 'Veículo de cor prata.',
  dailyRate: 140,
  available: false,
  licensePlate: 'NYS0A35',
};

const editedCar1 = {
  name: 'Uno 1.0',
  brand: 'Fiat',
  description: 'Veículo de cor prata, com câmbio manual e ventilador',
  dailyRate: 150,
  available: true,
  licensePlate: 'NYS0A36',
};

const car2 = {
  name: 'Argo 1.3 GSR',
  brand: 'Fiat',
  description: 'Veículo de cor prata, com câmbio automático e ar-condicionado',
  dailyRate: 170,
  available: true,
  licensePlate: 'QNB2203',
};

const car3 = {
  name: car2.name,
  brand: car2.brand,
  description: car2.description,
  dailyRate: car2.dailyRate,
  available: car2.available,
  licensePlate: car1.licensePlate,
};

function selectCars(add) {
  let query = `SELECT
                car.id, 
                car.name, 
                car.brand, 
                car.description, 
                car.dailyRate, 
                car.categoryId, 
                cat.name AS categoryName, 
                cat.description AS categoryDescription, 
                car.available, 
                car.licensePlate 
              FROM 
                cars AS car, 
                categories AS cat 
              WHERE 
                car.categoryId = cat.id`;
  if (add) query += ` ${add}`;
  return query;
}

function selectCategories(where) {
  let query = 'SELECT * FROM categories';
  if (where) query += ` WHERE ${where}`;
  return query;
}

module.exports = {
  category1,
  editedCategory1,
  category2,
  category3,
  category4,
  car1,
  editedCar1,
  car2,
  car3,
  selectCars,
  selectCategories,
};
