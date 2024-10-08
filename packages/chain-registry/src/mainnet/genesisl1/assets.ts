import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'genesisl1',
  assets: [{
      description: 'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
      denom_units: [{
          denom: 'el1',
          exponent: 0
        }, {
          denom: 'l1',
          exponent: 18
        }],
      base: 'el1',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;