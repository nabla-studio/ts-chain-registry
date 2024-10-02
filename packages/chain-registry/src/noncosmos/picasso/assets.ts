import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'picasso',
  assets: [
    {
      description: 'The native staking and governance token of Picasso Kusama.',
      denom_units: [{
          denom: 'ppica',
          exponent: 0
        }, {
          denom: 'pica',
          exponent: 12
        }],
      type_asset: 'substrate',
      base: 'ppica',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      coingecko_id: 'picasso',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }]
    },
    {
      denom_units: [{
          denom: '4',
          exponent: 0
        }, {
          denom: 'ksm',
          exponent: 12
        }],
      type_asset: 'substrate',
      base: '4',
      name: 'Kusama',
      display: 'ksm',
      symbol: 'KSM',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'kusama',
            base_denom: 'Planck'
          },
          provider: 'Kusama Parachain'
        }],
      images: [{
          image_sync: {
            chain_name: 'kusama',
            base_denom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      }
    },
    {
      denom_units: [{
          denom: '79228162514264337593543950342',
          exponent: 0
        }, {
          denom: 'dot',
          exponent: 10
        }],
      type_asset: 'substrate',
      base: '79228162514264337593543950342',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'composablepolkadot',
            base_denom: '79228162514264337593543950342',
            channel_id: 'channel-15'
          },
          chain: {
            channel_id: 'channel-15',
            path: 'transfer/channel-15/79228162514264337593543950342'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'composablepolkadot',
            base_denom: '79228162514264337593543950342'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          theme: {
            primary_color_hex: '#e4047c'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    },
    {
      denom_units: [{
          denom: '130',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'substrate',
      base: '130',
      name: 'Statemine',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'statemine',
            base_denom: '130'
          },
          provider: 'Kusama Parachain'
        }],
      images: [{
          image_sync: {
            chain_name: 'statemine',
            base_denom: '130'
          }
        }]
    },
    {
      denom_units: [{
          denom: '2125',
          exponent: 0
        }, {
          denom: 'TNKR',
          exponent: 12
        }],
      type_asset: 'substrate',
      base: '2125',
      name: 'Tinkernet',
      display: 'TNKR',
      symbol: 'TNKR',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'tinkernet',
            base_denom: 'Planck'
          },
          provider: 'Tinkernet Parachain'
        }],
      images: [{
          image_sync: {
            chain_name: 'tinkernet',
            base_denom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      }
    }
  ]
};
export default info;