import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'quasartestnet',
  assets: [
    {
      description: 'The native token of Quasar',
      denom_units: [{
          denom: 'uqsr',
          exponent: 0,
          aliases: []
        }, {
          denom: 'qsr',
          exponent: 6,
          aliases: []
        }],
      base: 'uqsr',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      type_asset: 'sdk.coin'
    },
    {
      denom_units: [{
          denom: 'uayy',
          exponent: 0
        }, {
          denom: 'ayy',
          exponent: 6
        }],
      base: 'uayy',
      name: 'AYY',
      display: 'ayy',
      symbol: 'AYY',
      type_asset: 'sdk.coin'
    },
    {
      denom_units: [{
          denom: 'uoro',
          exponent: 0
        }, {
          denom: 'oro',
          exponent: 6
        }],
      base: 'uoro',
      name: 'oro',
      display: 'oro',
      symbol: 'ORO',
      type_asset: 'sdk.coin'
    }
  ]
};
export default info;