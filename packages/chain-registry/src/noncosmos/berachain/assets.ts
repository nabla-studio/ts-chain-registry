import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'berachain',
  assets: [{
      description: 'The native staking token of Berachain.',
      denom_units: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'bera',
          exponent: 18
        }],
      base: 'wei',
      display: 'bera',
      name: 'Berachain',
      symbol: 'BERA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/berachain/images/bera.png',
          theme: {
            circle: true
          }
        }],
      coingecko_id: 'berachain-bera'
    }]
};
export default info;