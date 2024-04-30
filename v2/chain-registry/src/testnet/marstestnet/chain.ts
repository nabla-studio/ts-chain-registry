import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'marstestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Mars Hub Testnet',
  chain_id: 'ares-1',
  bech32_prefix: 'mars',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'umars',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0.025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'umars'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.marsprotocol.io/',
        provider: 'Mars Protocol'
      }, {
        address: 'https://rpc-mars.nodeist.net/',
        provider: 'Nodeist'
      }],
    rest: [{
        address: 'https://testnet-rest.marsprotocol.io/',
        provider: 'Mars Protocol'
      }, {
        address: 'https://api-mars.nodeist.net/',
        provider: 'Nodeist'
      }]
  },
  explorers: [{
      kind: 'Mars Protocol',
      url: 'https://testnet-explorer.marsprotocol.io',
      tx_page: 'https://testnet-explorer.marsprotocol.io/transactions/${txHash}'
    }, {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/t-mars/',
      tx_page: 'https://exp.nodeist.net/t-mars/transactions/${txHash}'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-icon.svg'
    }]
};
export default info;