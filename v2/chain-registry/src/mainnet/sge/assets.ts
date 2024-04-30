import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sge',
  assets: [{
      description: 'The native token of SGE Network',
      denom_units: [{
          denom: 'usge',
          exponent: 0
        }, {
          denom: 'sge',
          exponent: 6
        }],
      base: 'usge',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      coingecko_id: 'six-sigma',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
        }]
    }]
};
export default info;