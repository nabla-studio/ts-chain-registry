import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'heli',
  assets: [{
      description: 'The native token of HeliChain',
      denom_units: [{
          denom: 'uheli',
          exponent: 0
        }, {
          denom: 'heli',
          exponent: 6
        }],
      base: 'uheli',
      name: 'Heli',
      display: 'heli',
      symbol: 'HELI',
      coingecko_id: 'helichain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/heli/images/heli.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/heli/images/heli.svg',
          theme: {
            primary_color_hex: '#fccc24'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;