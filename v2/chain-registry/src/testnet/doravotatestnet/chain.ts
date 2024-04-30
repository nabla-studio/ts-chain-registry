import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'doravotatestnet',
  chain_id: 'vota-testnet',
  pretty_name: 'Dora Vota Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'dora',
  daemon_name: 'dorad',
  node_home: '$HOME/.dora',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'peaka',
        fixed_min_gas_price: 100000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'peaka'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://vota-testnet-rpc.dorafactory.org/',
        provider: 'dorafactory'
      }],
    rest: [{
        address: 'https://vota-testnet-rest.dorafactory.org',
        provider: 'dorafactory'
      }],
    grpc: [{
        address: 'vota-testnet-grpc.dorafactory.org:443',
        provider: 'dorafactory'
      }]
  },
  explorers: [{
      kind: 'Dora Vota Ping Pub',
      url: 'https://maci-explorer-test.dorafactory.org',
      tx_page: 'https://maci-explorer-test.dorafactory.org/dora/tx/${txHash}'
    }]
};
export default info;