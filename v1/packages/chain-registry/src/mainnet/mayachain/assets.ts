import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'mayachain',
  assets: [{
      description: 'The native token of Maya Protocol',
      denom_units: [{
          denom: 'cacao',
          exponent: 0
        }, {
          denom: 'CACAO',
          exponent: 10
        }],
      base: 'cacao',
      name: 'Cacao',
      display: 'CACAO',
      symbol: 'CACAO',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/cacao.svg'
        }],
      coingecko_id: 'cacao',
      keywords: ['dex'],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/cacao.svg'
      },
      type_asset: 'sdk.coin'
    }, {
      description: 'The native revenue sharing token of Maya Protocol',
      denom_units: [{
          denom: 'maya',
          exponent: 0
        }, {
          denom: 'MAYA',
          exponent: 4
        }],
      base: 'maya',
      name: 'Maya',
      display: 'MAYA',
      symbol: 'MAYA',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/maya.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mayachain/images/maya.svg'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;