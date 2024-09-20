import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'archway',
  assets: [
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      extended_description: 'Archway aims to incentivize developers by sharing a portion of the transaction fees generated by their decentralized applications (dApps) built on the platform. This innovative approach helps align the interests of developers with the network\'s growth and sustainability. Archway\'s native token, ARCH, is used for staking, governance, and distributing rewards to developers. By leveraging the Cosmos SDK, Archway ensures interoperability and scalability, allowing developers to build and deploy efficient and high-performance dApps.',
      denom_units: [
        {
          denom: 'aarch',
          exponent: 0
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      base: 'aarch',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      }
    },
    {
      description: 'ERIS liquid staked ARCH',
      type_asset: 'cw20',
      address: 'archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
      denom_units: [{
          denom: 'cw20:archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
          exponent: 0
        }, {
          denom: 'ampARCH',
          exponent: 6
        }],
      base: 'cw20:archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
      name: 'ERIS Amplified ARCH',
      display: 'ampARCH',
      symbol: 'ampARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/amparch.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/amparch.png',
          theme: {
            primary_color_hex: '#5c84cc'
          }
        }]
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [{
          denom: 'ibc/D2BCFE34F35AF2968C8E1F84557D8A2058BB56F739EB553206EFC2AD8C6EDAF0',
          exponent: 0
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D2BCFE34F35AF2968C8E1F84557D8A2058BB56F739EB553206EFC2AD8C6EDAF0',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-1429',
            path: 'transfer/channel-1429/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
          theme: {
            primary_color_hex: '#edd5ee'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      }
    },
    {
      description: 'The native token of Vidulum',
      denom_units: [{
          denom: 'ibc/1BCF1FCAFE3568E234787EDFDA12460BD8931B17FE6A729DCD60FAD845558DA1',
          exponent: 0,
          aliases: ['uvdl']
        }, {
          denom: 'vdl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1BCF1FCAFE3568E234787EDFDA12460BD8931B17FE6A729DCD60FAD845558DA1',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'vidulum',
            base_denom: 'uvdl',
            channel_id: 'channel-24'
          },
          chain: {
            channel_id: 'channel-110',
            path: 'transfer/channel-110/uvdl'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'vidulum',
            base_denom: 'uvdl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg',
          theme: {
            primary_color_hex: '#3454bc'
          }
        }]
    },
    {
      description: 'Astrovault AXV',
      type_asset: 'cw20',
      address: 'archway1ecjefhcf8r60wtfnhwefrxhj9caeqa90fj58cqsaafqveawn6cjs5znd2n',
      denom_units: [{
          denom: 'cw20:archway1ecjefhcf8r60wtfnhwefrxhj9caeqa90fj58cqsaafqveawn6cjs5znd2n',
          exponent: 0
        }, {
          denom: 'AXV',
          exponent: 6
        }],
      base: 'cw20:archway1ecjefhcf8r60wtfnhwefrxhj9caeqa90fj58cqsaafqveawn6cjs5znd2n',
      name: 'Astrovault AXV',
      display: 'AXV',
      symbol: 'AXV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.svg',
          theme: {
            primary_color_hex: '#141434'
          }
        }],
      coingecko_id: 'astrovault'
    },
    {
      description: 'Wrapped ARCH',
      type_asset: 'cw20',
      address: 'archway1msc3fa4e2mh73y760qmjd3wfkzr98nl26f36xgt2xnhuw6ay3scs42zeue',
      denom_units: [{
          denom: 'cw20:archway1msc3fa4e2mh73y760qmjd3wfkzr98nl26f36xgt2xnhuw6ay3scs42zeue',
          exponent: 0
        }, {
          denom: 'wARCH',
          exponent: 18
        }],
      base: 'cw20:archway1msc3fa4e2mh73y760qmjd3wfkzr98nl26f36xgt2xnhuw6ay3scs42zeue',
      name: 'Wrapped ARCH',
      display: 'wARCH',
      symbol: 'wARCH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'archway',
            base_denom: 'aarch'
          },
          provider: 'Archway'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.svg',
          theme: {
            primary_color_hex: '#000000'
          }
        }]
    },
    {
      description: 'Circle\'s USDC Noble on Archway ',
      denom_units: [{
          denom: 'ibc/43897B9739BD63E3A08A88191999C632E052724AB96BD4C74AE31375C991F48D',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/43897B9739BD63E3A08A88191999C632E052724AB96BD4C74AE31375C991F48D',
      name: 'USDC (Noble)',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-12'
          },
          chain: {
            channel_id: 'channel-29',
            path: 'transfer/channel-29/uusdc'
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
    }
  ]
};
export default info;