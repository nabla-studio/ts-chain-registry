import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'umee',
  assets: [{
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'uumee',
          exponent: 0
        }, {
          denom: 'umee',
          exponent: 6
        }],
      base: 'uumee',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      coingecko_id: 'umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg',
          theme: {
            primary_color_hex: '#22f2e9'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;