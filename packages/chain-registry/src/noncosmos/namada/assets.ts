import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'namada',
  assets: [{
      description: 'The native token of Namada',
      denom_units: [{
          denom: 'unam',
          exponent: 0
        }, {
          denom: 'nam',
          exponent: 6
        }],
      base: 'unam',
      display: 'nam',
      name: 'Namada',
      symbol: 'NAM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/namada/images/nam.png',
          theme: {
            circle: true,
            primary_color_hex: '#fbfb04'
          }
        }],
      socials: {
        website: 'https://namada.net/',
        twitter: 'https://twitter.com/namada'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;