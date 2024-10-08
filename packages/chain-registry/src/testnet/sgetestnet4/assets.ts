import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'sgetestnet4',
  assets: [{
      description: 'The SGE token is primarily a governance token for the SGE Network blockchain.',
      denom_units: [{
          denom: 'usge',
          exponent: 0
        }, {
          denom: 'sge',
          exponent: 6
        }],
      base: 'usge',
      name: 'SGE Testnet4',
      display: 'sge',
      symbol: 'SGE',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'sgetestnet',
            base_denom: 'usge'
          },
          provider: 'SGE'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'sge',
            base_denom: 'usge'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg',
          theme: {
            primary_color_hex: '#C0A15B',
            background_color_hex: '#00000000',
            circle: false
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;