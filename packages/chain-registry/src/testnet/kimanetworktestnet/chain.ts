import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'kimanetworktestnet',
  status: 'live',
  website: 'https://www.kima.network/',
  network_type: 'testnet',
  pretty_name: 'Kima Network Testnet',
  chain_type: 'cosmos',
  chain_id: 'kima_testnet',
  bech32_prefix: 'kima',
  daemon_name: 'uKIMA',
  node_home: '$HOME/.kima',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uKIMA',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc-testnet.kima.finance/',
        provider: 'Kima Network'
      }],
    rest: [{
        address: 'https://api-testnet.kima.finance',
        provider: 'Kima Network'
      }]
  },
  explorers: [{
      kind: 'Kima Network',
      url: 'https://explorer-testnet.kima.finance/',
      tx_page: 'https://explorer-testnet.kima.finance/transactions/${txHash}'
    }]
};
export default info;