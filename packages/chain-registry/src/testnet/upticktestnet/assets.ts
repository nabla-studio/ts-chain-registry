import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'upticktestnet',
  assets: [{
      description: 'The native token of Uptick',
      denom_units: [{
          denom: 'auptick',
          exponent: 0
        }, {
          denom: 'uptick',
          exponent: 18
        }],
      base: 'auptick',
      name: 'Uptick',
      display: 'uptick',
      symbol: 'UPTICK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/upticktestnet/images/uptick.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/upticktestnet/images/uptick.png'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;