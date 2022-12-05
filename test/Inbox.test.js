// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor, usado para criar instancias
const web3 = new Web3(ganache.provider()); // tenta ligar-se à rede de testes local
const { interface, bytecode} = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
    //Get list of all accounts
    accounts = await web3.eth.getAccounts();

    //Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ["Hi there!"],
         })
        .send({ from: accounts[0], gas:"1000000"});
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default messsage', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, "Hi there!");
    });

    it('can change the message', async () => {
        await inbox.methods.setMessage('bye byee').send({from: accounts[0]});
        const newMessage = await inbox.methods.message().call();
        assert.equal(newMessage, 'bye byee');
    })
})