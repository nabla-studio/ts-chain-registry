import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'realio',
  assets: [{
      description: 'The native currency of the Realio Network.',
      denom_units: [{
          denom: 'ario',
          exponent: 0
        }, {
          denom: 'rio',
          exponent: 18
        }],
      base: 'ario',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      coingecko_id: 'realio-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
        }]
    }, {
      description: 'A hybrid equity token that represent ownership of the Realio Ecosystem and provides utility functions on the Network.',
      denom_units: [{
          denom: 'arst',
          exponent: 0
        }, {
          denom: 'rst',
          exponent: 18
        }],
      base: 'arst',
      name: 'Realio Security Token',
      display: 'rst',
      symbol: 'RST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png'
        }]
    }]
};
export default info;