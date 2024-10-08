import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'konstellation',
  assets: [{
      description: 'The native token of Konstellation Network',
      denom_units: [{
          denom: 'udarc',
          exponent: 0
        }, {
          denom: 'darc',
          exponent: 6
        }],
      base: 'udarc',
      name: 'DARC',
      display: 'darc',
      symbol: 'DARC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
      },
      coingecko_id: 'darcmatter-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg',
          theme: {
            primary_color_hex: '#042a61'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;