import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'archwaytestnet',
  assets: [
    {
      description: 'The native token of Archway Test Network.',
      denom_units: [
        {
          denom: 'aconst',
          exponent: 0
        },
        {
          denom: 'uconst',
          exponent: 12
        },
        {
          denom: 'const',
          exponent: 18
        }
      ],
      base: 'aconst',
      name: 'Archway',
      display: 'const',
      symbol: 'CONST',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'archway',
            base_denom: 'aarch'
          },
          provider: 'Archway Testnet'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'archway',
            base_denom: 'aarch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Wrapped CONST (Archway Testnet token)',
      type_asset: 'cw20',
      address: 'archway1dz6h2smr432gvzruklk3lps7ak2ca7cngdge4vym93wehkkypwpqgwr2q2',
      denom_units: [{
          denom: 'cw20:archway1dz6h2smr432gvzruklk3lps7ak2ca7cngdge4vym93wehkkypwpqgwr2q2',
          exponent: 0
        }, {
          denom: 'wARCH',
          exponent: 18
        }],
      base: 'cw20:archway1dz6h2smr432gvzruklk3lps7ak2ca7cngdge4vym93wehkkypwpqgwr2q2',
      name: 'Wrapped ARCH',
      display: 'wARCH',
      symbol: 'wARCH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'archwaytestnet',
            base_denom: 'aconst'
          },
          provider: 'Archway'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'archway',
            base_denom: 'cw20:archway1msc3fa4e2mh73y760qmjd3wfkzr98nl26f36xgt2xnhuw6ay3scs42zeue'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.svg',
          theme: {
            primary_color_hex: '#000000'
          }
        }]
    },
    {
      description: 'Circle\'s USDC Noble Testnet (Grand) on Archway Testnet',
      denom_units: [{
          denom: 'ibc/34F8D3402273FFA5278AE5757D81CE151ACFD4B19C494C0EE372A7229714824F',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/34F8D3402273FFA5278AE5757D81CE151ACFD4B19C494C0EE372A7229714824F',
      name: 'USDC (Noble)',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'nobletestnet',
            base_denom: 'uusdc',
            channel_id: 'channel-215'
          },
          chain: {
            channel_id: 'channel-500',
            path: 'transfer/channel-500/uusdc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          }
        }]
    },
    {
      description: 'Wrapped USDC (Noble Testnet Grand)',
      type_asset: 'cw20',
      address: 'archway172vetupqnkgdc7dp3gwqpvk5ljmgzyj2gs4ag2fdmp0s2rucxxsqh0nqeu',
      denom_units: [{
          denom: 'cw20:archway172vetupqnkgdc7dp3gwqpvk5ljmgzyj2gs4ag2fdmp0s2rucxxsqh0nqeu',
          exponent: 0
        }, {
          denom: 'wUSDC',
          exponent: 6
        }],
      base: 'cw20:archway172vetupqnkgdc7dp3gwqpvk5ljmgzyj2gs4ag2fdmp0s2rucxxsqh0nqeu',
      name: 'Wrapped USDC',
      display: 'wUSDC',
      symbol: 'wUSDC',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'archwaytestnet',
            base_denom: 'ibc/34F8D3402273FFA5278AE5757D81CE151ACFD4B19C494C0EE372A7229714824F'
          },
          provider: 'Archway'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'archway',
            base_denom: 'cw20:archway1gaf9nw7n8v5lpjz9caxjpps006kxfcrzcuc8y5qp4clslhven2ns2g0ule'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.svg',
          theme: {
            primary_color_hex: '#000000'
          }
        }]
    }
  ]
};
export default info;