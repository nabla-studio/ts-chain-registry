import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'conscious',
  assets: [{
      description: 'Cvn is a Layer-1 blockchain built to deliver on the promise of DeFi',
      extended_description: 'Conscious Network is a public chain infrastructure that deeply integrates AI. It is based on a multi-layer blockchain network architecture consisting of Layer 1 and L2 Rollup, and introduces decentralized storage protocols to build a scalable Web3 AI infrastructure.',
      denom_units: [{
          denom: 'acvnt',
          exponent: 0
        }, {
          denom: 'cvnt',
          exponent: 18
        }],
      base: 'acvnt',
      name: 'Cvn',
      display: 'cvnt',
      symbol: 'CVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
      },
      coingecko_id: 'consciousdao',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg',
          theme: {
            primary_color_hex: '#047e04'
          }
        }],
      socials: {
        website: 'https://cvn.io',
        twitter: 'https://twitter.com/conscious_chain'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;