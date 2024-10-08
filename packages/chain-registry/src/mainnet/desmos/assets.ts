import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'desmos',
  assets: [{
      description: 'The native token of Desmos',
      denom_units: [{
          denom: 'udsm',
          exponent: 0
        }, {
          denom: 'dsm',
          exponent: 6
        }],
      base: 'udsm',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
      },
      coingecko_id: 'desmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg',
          theme: {
            primary_color_hex: '#fb804e'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;