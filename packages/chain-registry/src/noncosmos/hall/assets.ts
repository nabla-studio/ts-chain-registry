import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'hall',
  assets: [{
      description: 'The native token of Coinhall',
      denom_units: [{
          denom: 'uhall',
          exponent: 0
        }, {
          denom: 'hall',
          exponent: 6
        }],
      base: 'uhall',
      display: 'hall',
      name: 'Hall',
      symbol: 'HALL',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/hall/images/hall.svg',
          theme: {
            circle: false
          }
        }],
      socials: {
        website: 'https://coinhall.org/',
        twitter: 'https://twitter.com/coinhall_org'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;