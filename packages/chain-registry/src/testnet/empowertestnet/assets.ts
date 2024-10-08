import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'empowertestnet',
  assets: [{
      description: 'The native staking and governance token of the testnet version of Empower.',
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;