import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'finschia',
  assets: [{
      description: 'The native token of Finschia',
      denom_units: [{
          denom: 'cony',
          exponent: 0
        }, {
          denom: 'fnsa',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'cony',
      name: 'Finschia',
      display: 'fnsa',
      symbol: 'FNSA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
        }],
      coingecko_id: 'link',
      keywords: ['staking']
    }]
};
export default info;