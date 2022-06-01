require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/AmV8stROsMN7odkLWqpIOY8zffaq9hqo",
      accounts: [
        "d4c49a86fee3001caf4821399c425699a5a2e8597000c6646d77e42e2b3b73ae",
      ],
    },
  },
};
