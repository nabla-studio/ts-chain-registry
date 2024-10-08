import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'empowerchain',
  assets: [{
      description: 'The native staking and governance token of Empower.',
      denom_units: [{
          denom: 'umpwr',
          exponent: 0
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      base: 'umpwr',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: true
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.png',
          theme: {
            primary_color_hex: '#00e33a',
            background_color_hex: '#00e33a',
            circle: false
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;