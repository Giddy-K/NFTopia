import dotenv from 'dotenv';
import '@nomiclabs/hardhat-ethers';

dotenv.config();

//* Notes for deploying the smart contract on your own subnet
//* More info on subnets: https://docs.avax.network/subnets
//* Why deploy on a subnet: https://docs.avax.network/subnets/when-to-use-subnet-vs-c-chain
//* How to deploy on a subnet: https://docs.avax.network/subnets/create-a-local-subnet
//* Transactions on the C-Chain might take 2-10 seconds -> the ones on the subnet will be much faster
//* On C-Chain we're relaying on the Avax token to confirm transactions -> on the subnet we can create our own token
//* You are in complete control over the network and it's inner workings

export default {
  solidity: {
    compilers: [
      {
        version: '0.8.16',
        settings: {
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
      {
        version: '0.8.19',
        settings: {
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
      {
        version: '0.8.20',
        settings: {
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      }
    ],
  },
  networks: {
    // fuji: {
    //   url: 'https://api.avax-test.network/ext/bc/C/rpc',
    //   gasPrice: 225000000000,
    //   chainId: 43113,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    wagmi: {
      url: "https://subnets.avax.network/wagmi/wagmi-chain-testnet/rpc",
      gasPrice: 225000000000,
      chainId: 11111,
      accounts: [process.env.PRIVATE_KEY],
    },
    // sepolia: {
    //   url: 'https://eth-sepolia.g.alchemy.com/v2/aXURLNbUSu1lMvjYrUc1cd3EH3Hi1LaV',
    //   accounts: ['3f8402621fa65e784b3923fb1a6c13c1828cbcbb44fc084f53163c9636ca54ed']
    // },
    // subnet: {
    //   url: process.env.NODE_URL,
    //   chainId: Number(process.env.CHAIN_ID),
    //   gasPrice: 'auto',
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
}