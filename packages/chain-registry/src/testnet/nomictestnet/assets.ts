import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'nomictestnet',
  assets: [{
      description: 'Nomic\'s native token.',
      denom_units: [{
          denom: 'unom',
          exponent: 0
        }, {
          denom: 'nom',
          exponent: 6
        }],
      base: 'unom',
      name: 'Nomic',
      display: 'nom',
      symbol: 'NOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      },
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'nomic',
            base_denom: 'unom'
          },
          provider: 'Nomic'
        }],
      images: [{
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'unom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg',
          theme: {
            primary_color_hex: '#6404fc'
          }
        }],
      type_asset: 'sdk.coin'
    }, {
      description: 'Bitcoin. On Cosmos.',
      denom_units: [{
          denom: 'usat',
          exponent: 0
        }, {
          denom: 'nbtc',
          exponent: 14
        }],
      base: 'usat',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcointestnet',
            base_denom: 'sat'
          },
          provider: 'Nomic'
        }],
      images: [{
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
          theme: {
            primary_color_hex: '#8436e6'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;