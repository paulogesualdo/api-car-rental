/* eslint-disable no-unused-expressions */

const chai = require('chai');

function documentoValido(ano) {

  const hasNotArguments = !ano;
  const isNotTypeNumber = typeof (ano) !== 'number';
  const currentYear = new Date().getFullYear();
  const isNotLessThanCurrentYear = ano < currentYear;

  if (hasNotArguments || isNotTypeNumber || isNotLessThanCurrentYear) {
    return false;
  }

  return true;

}

describe('cadastroCliente', () => {
  it('documentoValido deve ser uma função', () => {
    chai.expect(typeof documentoValido).to.equal('function');
  });
  it('deve retornar false quando não passado parâmetro', () => {
    chai.expect(documentoValido()).to.be.false;
  });
  it('deve retornar false quando o parâmetro não for um número', () => {
    chai.expect(documentoValido('string')).to.be.false;
  });
  it('deve retornar false quando o parâmetro for menor que o ano corrente', () => {
    chai.expect(documentoValido(2020)).to.be.false;
  });
  it('deve retornar true quando o parâmetro for maior ou igual ao ano corrente', () => {
    chai.expect(documentoValido(2025)).to.be.true;
  });
});
