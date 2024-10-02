import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'onex',
  assets: [{
      description: 'The native token of ONEX',
      denom_units: [{
          denom: 'aonex',
          exponent: 0
        }, {
          denom: 'onex',
          exponent: 18
        }],
      base: 'aonex',
      name: 'ONEX',
      display: 'onex',
      symbol: 'ONEX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.svg'
      },
      keywords: ['dex'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;