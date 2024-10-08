import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'fiammatestnet',
  assets: [{
      description: 'The native staking token of fiamma.',
      denom_units: [{
          denom: 'ufia',
          exponent: 0
        }, {
          denom: 'fia',
          exponent: 6
        }],
      base: 'ufia',
      name: 'Fiamma',
      display: 'fia',
      symbol: 'FIA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/fiammatestnet/images/fiamma.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/fiammatestnet/images/fiamma.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;