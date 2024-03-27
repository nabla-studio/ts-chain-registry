import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'neutaro',
  assets: [
    {
      description: 'The native token of Neutaro',
      denom_units: [
        {
          denom: 'uneutaro',
          exponent: 0
        },
        {
          denom: 'neutaro',
          exponent: 6
        }
      ],
      base: 'uneutaro',
      name: 'Neutaro',
      display: 'neutaro',
      symbol: 'NTMPI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg'
      },
      coingecko_id: 'neutaro',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg'
        }
      ]
    }
  ]
};
export default info;
