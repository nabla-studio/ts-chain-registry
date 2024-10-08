import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'okexchain',
  assets: [{
      description: 'The native token of OKExChain',
      denom_units: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'okt',
          exponent: 18
        }],
      base: 'wei',
      name: 'OKExChain',
      display: 'okt',
      symbol: 'OKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
      },
      coingecko_id: 'oec-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png',
          theme: {
            primary_color_hex: '#bbbbbb'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;