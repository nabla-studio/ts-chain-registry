import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'artelatestnet',
  assets: [{
      description: 'The native EVM, governance and staking token of the Artela Network',
      denom_units: [{
          denom: 'uart',
          exponent: 0
        }, {
          denom: 'art',
          exponent: 18
        }],
      base: 'uart',
      name: 'Artela Testnet',
      display: 'art',
      symbol: 'ART',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/artelatestnet/images/artela.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/artelatestnet/images/artela.png'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;