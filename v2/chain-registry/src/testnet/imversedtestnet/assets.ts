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
        }]
    }, {
      description: 'The native staking and governance token of the Imversed testnet.',
      denom_units: [{
          denom: 'ibc/C6438A7D613196373D939891C99CA7EEF4F78F4A78DC8590E51E62F8ED16E72B',
          exponent: 0,
          aliases: ['usaage']
        }, {
          denom: 'imv',
          exponent: 6
        }],
      base: 'ibc/C6438A7D613196373D939891C99CA7EEF4F78F4A78DC8590E51E62F8ED16E72B',
      name: 'Imv',
      display: 'imv',
      symbol: 'IMV',
      ibc: {
        source_channel: 'channel-1',
        dst_channel: 'channel-221',
        source_denom: 'nimv'
      },
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/imversedtestnet/images/imversed.svg'
        }]
    }]
};
export default info;