import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'humans',
  assets: [{
      description: 'The native staking and governance token of Humans.ai.',
      denom_units: [{
          denom: 'aheart',
          exponent: 0
        }, {
          denom: 'heart',
          exponent: 18
        }],
      base: 'aheart',
      name: 'HEART',
      display: 'heart',
      symbol: 'HEART',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg'
      },
      coingecko_id: 'humans-ai',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg',
          theme: {
            dark_mode: true,
            primary_color_hex: '#f3f3f3'
          }
        }],
      socials: {
        website: 'https://humans.ai/',
        twitter: 'https://twitter.com/humansdotai'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;