import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'unicorn',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://unicorn.meme/',
  pretty_name: 'Unicorn',
  chain_type: 'cosmos',
  chain_id: 'unicorn-420',
  bech32_prefix: 'unicorn',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uwunicorn',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uwunicorn'
      }]
  }
};
export default info;