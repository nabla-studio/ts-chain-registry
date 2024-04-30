import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'mantrachaintestnet',
  assets: [{
      description: 'The native token of MANTRA',
      denom_units: [{
          denom: 'uom',
          exponent: 0,
          aliases: []
        }, {
          denom: 'om',
          exponent: 6,
          aliases: []
        }],
      base: 'uom',
      name: 'MANTRA Chain',
      display: 'om',
      symbol: 'OM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
      },
      coingecko_id: '',
      keywords: [
        'mantra',
        'staking',
        'delegating',
        'governance',
        'regulation',
        'defi'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg'
        }]
    }]
};
export default info;