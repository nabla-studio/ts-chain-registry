import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'titantestnet',
  assets: [{
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'atkx',
          exponent: 0,
          aliases: ['attotkx']
        },
        {
          denom: 'utkx',
          exponent: 12,
          aliases: ['microtkx']
        },
        {
          denom: 'mtkx',
          exponent: 15,
          aliases: ['millitkx']
        },
        {
          denom: 'tkx',
          exponent: 18,
          aliases: []
        }
      ],
      base: 'atkx',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      }
    }, {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [{
          denom: 'ibc/7C0807A56073C4A27B0DE1C21BA3EB75DF75FD763F4AD37BC159917FC01145F0',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7C0807A56073C4A27B0DE1C21BA3EB75DF75FD763F4AD37BC159917FC01145F0',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'nobletestnet',
            base_denom: 'uusdc'
          },
          provider: 'Circle'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'nobletestnet',
            base_denom: 'uusdc',
            channel_id: 'channel-208'
          },
          chain: {
            channel_id: 'channel-7',
            path: 'transfer/channel-7/uusdc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'nobletestnet',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          }
        }]
    }]
};
export default info;