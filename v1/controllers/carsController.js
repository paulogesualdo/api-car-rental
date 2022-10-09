// Este código é o controller da entidade cars e
// exporta uma função chamada carsWrapper. Não
// confundir com o adapter da entidade cars que
// também exporta uma função chamada carWrapper.

// Esta função carsWrapper recebe da factory os parâmetros
// abaixo:
// - config: algumas configurações como variáveis de
//   ambiente que vieram da pasta config na raiz do
//   sistema
// - commons: algumas funções comuns que podem ser
//   reutilizadas ao longo do programa como uma
//   calculadora por exemplo, que vieram da pasta commons
//   que fica na raiz do sistema
// - adapters: 

function carsWrapper({ config, commons, adapters }) {

  // A constante getCars recebe uma função assíncrona
  // que recebe como parâmetro um evento.
  // Essa função assíncrona pega a função getCars
  // que está dentro do adapter e passa para ela um
  // objeto com três chaves.

  const getCars = async event => adapters.getCars({

    // event contém diversos parâmetros que vieram da
    // requisição (Postman), cujos mais importantes
    // são: payload (o que foi passado no corpo da
    // requisição) e params (o que foi passado na URL)

    event,


    // onSucess que é uma função que recebe como parâmetro
    // uma response e retorna um objeto com uma response

    onSucess: response => ({ response }),


    // onError que é uma função anônima que não tem
    // parâmetros e retorna um objeto vazio

    onError: () => {},

  });

  const getCarById = async event => adapters.getCarById({
    event,
    onSucess: response => ({ response }),
    onError: () => {},
  });

  const postCar = async event => adapters.postCar({
    event,
    onSucess: response => ({ response }),
    onError: () => {},
  });

  const putCar = async event => adapters.putCar({
    event,
    onSucess: response => ({ response }),
    onError: () => {},
  });

  const deleteCar = async event => adapters.deleteCar({
    event,
    onSucess: response => ({ response }),
    onError: () => {},
  });

  return {
    getCars,
    getCarById,
    postCar,
    putCar,
    deleteCar,
  };

}

module.exports = carsWrapper;
