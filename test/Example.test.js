//para correr este ou mais testes de uma só vez, executar o comando 'npm run test'

// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor, usado para criar instancias

const web3 = new Web3(ganache.provider()); // tenta ligar-se à rede de testes local


class Car{
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}

let car;
let b;

beforeEach(() => {
    car = new Car();
b = null;
});


describe('Car', () => {
    it('can park',  () => {
        assert.equal(car.park(), 'stopped');
    });

    car = null;

    it('can drive', () => {

        assert.equal(car.drive(), 'vroom');
    })
});

