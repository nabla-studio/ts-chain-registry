import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'neuradevnet',
  chain_type: 'cosmos',
  chain_id: 'neura_268-1',
  bech32_prefix: 'neura',
  pretty_name: 'Neura Devnet',
  website: 'https://www.neuraprotocol.io/',
  description: 'Neura is an AI-centric, EVM-compatible Layer 1 blockchain built on the Cosmos SDK. We democratize GPU access and revolutionize AI project funding with IMO’s to advance AI development.',
  status: 'live',
  network_type: 'devnet',
  node_home: '$HOME/.neurad',
  daemon_name: 'neurad',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 1,
  fees: {
    fee_tokens: [{
        denom: 'atankr'
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'atankr'
      }]
  },
  codebase: {

  },
  images: [{
      image_sync: {
        chain_name: 'neura'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neura/images/neura.png',
      theme: {
        primary_color_hex: '#4e5afc'
      }
    }]
};
export default info;