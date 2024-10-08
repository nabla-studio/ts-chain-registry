import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'furya',
  assets: [{
      description: 'The native token of Furya',
      denom_units: [{
          denom: 'ufury',
          exponent: 0
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'ufury',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      coingecko_id: 'fanfury',
      keywords: ['gaming', 'staking'],
      socials: {
        twitter: 'https://twitter.com/furyachain'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;