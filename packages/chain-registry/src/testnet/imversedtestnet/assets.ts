import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'imversedtestnet',
  assets: [{
      description: 'The native staking and governance token of the Imversed testnet.',
      denom_units: [{
          denom: 'nimv',
          exponent: 0,
          aliases: []
        }, {
          denom: 'imv',
          exponent: 6,
          aliases: []
        }],
      base: 'nimv',
      name: 'Imv',
      display: 'imv',
      symbol: 'IMV',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;