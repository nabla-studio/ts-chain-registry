import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'commercionetwork',
  assets: [{
      description: 'The native token of Commercio.network',
      denom_units: [{
          denom: 'ucommercio',
          exponent: 0,
          aliases: []
        }, {
          denom: 'commercio',
          exponent: 6,
          aliases: []
        }],
      base: 'ucommercio',
      display: 'commercio',
      name: 'Commercio',
      symbol: 'COM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg',
          theme: {
            primary_color_hex: '#41a68c'
          }
        }],
      type_asset: 'sdk.coin'
    }, {
      description: 'The cash credit token of Commercio.network',
      denom_units: [{
          denom: 'uccc',
          exponent: 0,
          aliases: []
        }, {
          denom: 'ccc',
          exponent: 6,
          aliases: []
        }],
      base: 'uccc',
      display: 'ccc',
      name: 'Commercio Cash Credit',
      symbol: 'CCC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/ccc.svg',
          theme: {
            primary_color_hex: '#fbb804'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;