import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'shentutestnet',
  assets: [{
      description: 'The native token of Shentu',
      denom_units: [{
          denom: 'uctk',
          exponent: 0
        }, {
          denom: 'ctk',
          exponent: 6
        }],
      base: 'uctk',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'shentu',
            base_denom: 'uctk'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg',
          theme: {
            primary_color_hex: '#e4ac4c'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;