import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'six',
  assets: [{
      description: 'The native staking token of the SIX Protocol.',
      denom_units: [{
          denom: 'usix',
          exponent: 0
        }, {
          denom: 'six',
          exponent: 6
        }],
      base: 'usix',
      name: 'Six token',
      display: 'six',
      symbol: 'SIX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/six/images/six.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/six/images/six.png',
          theme: {
            primary_color_hex: '#3b75f3'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;