import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'cosmwasmtestnet',
  assets: [{
      description: 'Fee Token',
      denom_units: [{
          denom: 'umlg',
          exponent: 0
        }, {
          denom: 'MLG',
          exponent: 6
        }],
      base: 'umlg',
      name: 'Malaga',
      display: 'umlg',
      symbol: 'MLG',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
        }],
      type_asset: 'sdk.coin'
    }, {
      description: 'Staking Token',
      denom_units: [{
          denom: 'uand',
          exponent: 0
        }, {
          denom: 'AND',
          exponent: 6
        }],
      base: 'uand',
      name: 'Malaga Stake',
      display: 'uand',
      symbol: 'AND',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;