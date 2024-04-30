import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'coreumtestnet',
  assets: [{
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'utestcore',
          exponent: 0
        }, {
          denom: 'testcore',
          exponent: 6
        }],
      base: 'utestcore',
      name: 'Coreum',
      display: 'testcore',
      symbol: 'TESTCORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingecko_id: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }]
    }]
};
export default info;