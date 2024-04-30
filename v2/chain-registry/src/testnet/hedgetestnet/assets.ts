import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'hedgetestnet',
  assets: [{
      description: 'The native staking token of the Hedge blockchain.',
      denom_units: [{
          denom: 'uhedge',
          exponent: 0
        }, {
          denom: 'hedge',
          exponent: 6
        }],
      base: 'uhedge',
      name: 'Berberis HEDGE',
      display: 'hedge',
      symbol: 'HEDGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg'
        }]
    }]
};
export default info;