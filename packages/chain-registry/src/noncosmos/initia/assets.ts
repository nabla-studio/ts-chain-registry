import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'initia',
  assets: [{
      description: 'The native token of Initia',
      denom_units: [{
          denom: 'uinit',
          exponent: 0
        }, {
          denom: 'INIT',
          exponent: 6
        }],
      base: 'uinit',
      display: 'INIT',
      name: 'Initia',
      symbol: 'INIT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/initia/images/INIT.svg',
          theme: {
            circle: true,
            primary_color_hex: '#040404'
          }
        }],
      socials: {
        website: 'https://initia.xyz/',
        twitter: 'https://twitter.com/initiaFDN'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;