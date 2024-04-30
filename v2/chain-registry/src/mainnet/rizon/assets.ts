import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'rizon',
  assets: [{
      description: 'Native token of Rizon Chain',
      denom_units: [{
          denom: 'uatolo',
          exponent: 0
        }, {
          denom: 'atolo',
          exponent: 6
        }],
      base: 'uatolo',
      name: 'Rizon Chain',
      display: 'atolo',
      symbol: 'ATOLO',
      coingecko_id: 'rizon',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
        }],
      socials: {
        website: 'https://rizon.world/',
        twitter: 'https://twitter.com/hdac_rizon'
      }
    }]
};
export default info;