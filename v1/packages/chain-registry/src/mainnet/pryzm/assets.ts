import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'pryzm',
  assets: [
    {
      description: 'The native token of PRYZM',
      denom_units: [{
          denom: 'upryzm',
          exponent: 0
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'upryzm',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg',
          theme: {
            primary_color_hex: '#c6ddf5'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'The meme token of PRYZM',
      denom_units: [{
          denom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu',
          exponent: 0,
          aliases: ['uauuu']
        }, {
          denom: 'auuu',
          exponent: 6
        }],
      base: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu',
      name: 'AUUU',
      display: 'auuu',
      symbol: 'AUUU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.svg',
          theme: {
            primary_color_hex: '#eb536c'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub',
      denom_units: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Atom',
      display: 'atom',
      symbol: 'ATOM',
      coingecko_id: 'cosmos',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-859'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uatom'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Injective chain',
      denom_units: [{
          denom: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      coingecko_id: 'injective-protocol',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'inj',
            channel_id: 'channel-284'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/inj'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'injective',
            base_denom: 'inj'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primary_color_hex: '#04a2fc'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Osmosis chain',
      denom_units: [{
          denom: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
      name: 'Osmo',
      display: 'osmo',
      symbol: 'OSMO',
      coingecko_id: 'osmosis',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo',
            channel_id: 'channel-75755'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/uosmo'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Celestia chain',
      denom_units: [{
          denom: 'ibc/BF28D9C17E0306B194D50F51C3B2590BEAD15E04E03ADD34C3A26E62D85C9676',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BF28D9C17E0306B194D50F51C3B2590BEAD15E04E03ADD34C3A26E62D85C9676',
      name: 'Tia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia',
            channel_id: 'channel-34'
          },
          chain: {
            channel_id: 'channel-3',
            path: 'transfer/channel-3/utia'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Terra chain',
      denom_units: [{
          denom: 'ibc/B8AF5D92165F35AB31F3FC7C7B444B9D240760FA5D406C49D24862BD0284E395',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B8AF5D92165F35AB31F3FC7C7B444B9D240760FA5D406C49D24862BD0284E395',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      coingecko_id: 'terra-luna-2',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'uluna',
            channel_id: 'channel-473'
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/uluna'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primary_color_hex: '#f4de6f'
          }
        }]
    },
    {
      description: 'Circle\'s USDC on Noble',
      denom_units: [{
          denom: 'ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      coingecko_id: 'usd-coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-79'
          },
          chain: {
            channel_id: 'channel-5',
            path: 'transfer/channel-5/uusdc'
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
      description: 'Circle\'s USDC on Axelar',
      denom_units: [{
          denom: 'ibc/B9E4FD154C92D3A23BEA029906C4C5FF2FE74CB7E3A058290B77197A263CF88B',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B9E4FD154C92D3A23BEA029906C4C5FF2FE74CB7E3A058290B77197A263CF88B',
      name: 'USDC (Axelar)',
      display: 'usdc',
      symbol: 'USDC.axl',
      coingecko_id: 'axlusdc',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uusdc',
            channel_id: 'channel-155'
          },
          chain: {
            channel_id: 'channel-13',
            path: 'transfer/channel-13/uusdc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primary_color_hex: '#2474cc'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the dYdX chain',
      denom_units: [{
          denom: 'ibc/F8CA5236869F819BC006EEF088E67889A26E4140339757878F0F4E229CDDA858',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/F8CA5236869F819BC006EEF088E67889A26E4140339757878F0F4E229CDDA858',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      coingecko_id: 'dydx-chain',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx',
            channel_id: 'channel-71'
          },
          chain: {
            channel_id: 'channel-24',
            path: 'transfer/channel-24/adydx'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primary_color_hex: '#21212f'
          }
        }]
    },
    {
      description: 'Stride\'s liquid staked TIA',
      denom_units: [{
          denom: 'ibc/FA78980867B7E87F382CDA00275C55DDC248CABC7DEE27AC6868CCF97DD5E02F',
          exponent: 0,
          aliases: ['stutia']
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/FA78980867B7E87F382CDA00275C55DDC248CABC7DEE27AC6868CCF97DD5E02F',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stutia',
            channel_id: 'channel-257'
          },
          chain: {
            channel_id: 'channel-23',
            path: 'transfer/channel-23/stutia'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stutia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'Stride\'s liquid staked DYDX',
      denom_units: [{
          denom: 'ibc/120DC39B61CC121E91525C1D51624E41BBE74C537D7B0BE50BBFF9A00E37B6EE',
          exponent: 0,
          aliases: ['stadydx']
        }, {
          denom: 'stDYDX',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/120DC39B61CC121E91525C1D51624E41BBE74C537D7B0BE50BBFF9A00E37B6EE',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stadydx',
            channel_id: 'channel-257'
          },
          chain: {
            channel_id: 'channel-23',
            path: 'transfer/channel-23/stadydx'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stadydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'Drop Protocol\'s liquid staked ATOM',
      denom_units: [{
          denom: 'ibc/EA6E1E8BA2EB9F681C4BD12C8C81A46530A62934F2BD561B120A00F46946CE87',
          exponent: 0,
          aliases: ['udatom']
        }, {
          denom: 'dATOM',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EA6E1E8BA2EB9F681C4BD12C8C81A46530A62934F2BD561B120A00F46946CE87',
      name: 'dATOM',
      display: 'dATOM',
      symbol: 'dATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom',
            channel_id: 'channel-4329'
          },
          chain: {
            channel_id: 'channel-6',
            path: 'transfer/channel-6/factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
        }]
    },
    {
      description: 'Pryzm\'s native liquid staking token for ATOM',
      denom_units: [{
          denom: 'c:uatom',
          exponent: 0
        }, {
          denom: 'catom',
          exponent: 6
        }],
      base: 'c:uatom',
      name: 'cAtom',
      display: 'catom',
      symbol: 'cATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          provider: 'Pryzm'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s native liquid staking token for INJ',
      denom_units: [{
          denom: 'c:inj',
          exponent: 0
        }, {
          denom: 'cINJ',
          exponent: 18
        }],
      base: 'c:inj',
      name: 'cInj',
      display: 'cINJ',
      symbol: 'cINJ',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'injective',
            base_denom: 'inj'
          },
          provider: 'Pryzm'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cInj.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s native liquid staking token for OSMO',
      denom_units: [{
          denom: 'c:uosmo',
          exponent: 0
        }, {
          denom: 'cosmo',
          exponent: 6
        }],
      base: 'c:uosmo',
      name: 'cOsmo',
      display: 'cosmo',
      symbol: 'cOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          provider: 'Pryzm'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cOsmo.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s native liquid staking token for LUNA',
      denom_units: [{
          denom: 'c:uluna',
          exponent: 0
        }, {
          denom: 'cluna',
          exponent: 6
        }],
      base: 'c:uluna',
      name: 'cLuna',
      display: 'cluna',
      symbol: 'cLUNA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'uluna'
          },
          provider: 'Pryzm'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cLuna.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s native liquid staking token for AUUU',
      denom_units: [{
          denom: 'factory/pryzm1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3sk0s70x/cuauuu',
          exponent: 0
        }, {
          denom: 'cauuu',
          exponent: 6
        }],
      base: 'factory/pryzm1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3sk0s70x/cuauuu',
      name: 'cAuuu',
      display: 'cauuu',
      symbol: 'cAUUU',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'pryzm',
            base_denom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu'
          },
          provider: 'Pryzm'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAuuu.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s native liquid staking token for TIA',
      denom_units: [{
          denom: 'c:utia',
          exponent: 0
        }, {
          denom: 'ctia',
          exponent: 6
        }],
      base: 'c:utia',
      name: 'cTia',
      display: 'ctia',
      symbol: 'cTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          provider: 'Pryzm'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cTia.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'p:uatom:30Sep2024',
          exponent: 0
        }, {
          denom: 'pATOM30Sep2024',
          exponent: 6
        }],
      base: 'p:uatom:30Sep2024',
      name: 'pAtom (30Sep2024)',
      display: 'pATOM30Sep2024',
      symbol: 'pATOM-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'p:uatom:31Dec2024',
          exponent: 0
        }, {
          denom: 'pATOM31Dec2024',
          exponent: 6
        }],
      base: 'p:uatom:31Dec2024',
      name: 'pAtom (31Dec2024)',
      display: 'pATOM31Dec2024',
      symbol: 'pATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'p:uatom:31Dec2025',
          exponent: 0
        }, {
          denom: 'pATOM31Dec2025',
          exponent: 6
        }],
      base: 'p:uatom:31Dec2025',
      name: 'pAtom (31Dec2025)',
      display: 'pATOM31Dec2025',
      symbol: 'pATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'p:uosmo:30Sep2024',
          exponent: 0
        }, {
          denom: 'pOSMO30Sep2024',
          exponent: 6
        }],
      base: 'p:uosmo:30Sep2024',
      name: 'pOsmo (30Sep2024)',
      display: 'pOSMO30Sep2024',
      symbol: 'pOSMO-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'p:uosmo:31Dec2024',
          exponent: 0
        }, {
          denom: 'pOSMO31Dec2024',
          exponent: 6
        }],
      base: 'p:uosmo:31Dec2024',
      name: 'pOsmo (31Dec2024)',
      display: 'pOSMO31Dec2024',
      symbol: 'pOSMO-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'p:uosmo:31Dec2025',
          exponent: 0
        }, {
          denom: 'pOSMO31Dec2025',
          exponent: 6
        }],
      base: 'p:uosmo:31Dec2025',
      name: 'pOsmo (31Dec2025)',
      display: 'pOSMO31Dec2025',
      symbol: 'pOSMO-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'p:inj:30Sep2024',
          exponent: 0
        }, {
          denom: 'pINJ30Sep2024',
          exponent: 18
        }],
      base: 'p:inj:30Sep2024',
      name: 'pInj (30Sep2024)',
      display: 'pINJ30Sep2024',
      symbol: 'pINJ-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'p:inj:31Dec2024',
          exponent: 0
        }, {
          denom: 'pINJ31Dec2024',
          exponent: 18
        }],
      base: 'p:inj:31Dec2024',
      name: 'pInj (31Dec2024)',
      display: 'pINJ31Dec2024',
      symbol: 'pINJ-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'p:inj:31Dec2025',
          exponent: 0
        }, {
          denom: 'pINJ31Dec2025',
          exponent: 18
        }],
      base: 'p:inj:31Dec2025',
      name: 'pInj (31Dec2025)',
      display: 'pINJ31Dec2025',
      symbol: 'pINJ-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'p:uluna:30Sep2024',
          exponent: 0
        }, {
          denom: 'pLUNA30Sep2024',
          exponent: 6
        }],
      base: 'p:uluna:30Sep2024',
      name: 'pLuna (30Sep2024)',
      display: 'pLUNA30Sep2024',
      symbol: 'pLUNA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'p:uluna:31Dec2024',
          exponent: 0
        }, {
          denom: 'pLUNA31Dec2024',
          exponent: 6
        }],
      base: 'p:uluna:31Dec2024',
      name: 'pLuna (31Dec2024)',
      display: 'pLUNA31Dec2024',
      symbol: 'pLUNA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'p:uluna:31Dec2025',
          exponent: 0
        }, {
          denom: 'pLUNA31Dec2025',
          exponent: 6
        }],
      base: 'p:uluna:31Dec2025',
      name: 'pLuna (31Dec2025)',
      display: 'pLUNA31Dec2025',
      symbol: 'pLUNA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'p:uauuu:30Sep2024',
          exponent: 0
        }, {
          denom: 'pAUUU30Sep2024',
          exponent: 6
        }],
      base: 'p:uauuu:30Sep2024',
      name: 'pAuuu (30Sep2024)',
      display: 'pAUUU30Sep2024',
      symbol: 'pAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'p:uauuu:31Dec2024',
          exponent: 0
        }, {
          denom: 'pAUUU31Dec2024',
          exponent: 6
        }],
      base: 'p:uauuu:31Dec2024',
      name: 'pAuuu (31Dec2024)',
      display: 'pAUUU31Dec2024',
      symbol: 'pAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'p:uauuu:31Dec2025',
          exponent: 0
        }, {
          denom: 'pAUUU31Dec2025',
          exponent: 6
        }],
      base: 'p:uauuu:31Dec2025',
      name: 'pAuuu (31Dec2025)',
      display: 'pAUUU31Dec2025',
      symbol: 'pAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'p:stutia:30Sep2024',
          exponent: 0
        }, {
          denom: 'pstTIA30Sep2024',
          exponent: 6
        }],
      base: 'p:stutia:30Sep2024',
      name: 'pstTia (30Sep2024)',
      display: 'pstTIA30Sep2024',
      symbol: 'pstTIA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'p:stutia:31Dec2024',
          exponent: 0
        }, {
          denom: 'pstTIA31Dec2024',
          exponent: 6
        }],
      base: 'p:stutia:31Dec2024',
      name: 'pstTia (31Dec2024)',
      display: 'pstTIA31Dec2024',
      symbol: 'pstTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'p:stutia:31Dec2025',
          exponent: 0
        }, {
          denom: 'pstTIA31Dec2025',
          exponent: 6
        }],
      base: 'p:stutia:31Dec2025',
      name: 'pstTia (31Dec2025)',
      display: 'pstTIA31Dec2025',
      symbol: 'pstTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'p:stadydx:30Sep2024',
          exponent: 0
        }, {
          denom: 'pstDYDX30Sep2024',
          exponent: 18
        }],
      base: 'p:stadydx:30Sep2024',
      name: 'pstDydx (30Sep2024)',
      display: 'pstDYDX30Sep2024',
      symbol: 'pstDYDX-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'p:stadydx:31Dec2024',
          exponent: 0
        }, {
          denom: 'pstDYDX31Dec2024',
          exponent: 18
        }],
      base: 'p:stadydx:31Dec2024',
      name: 'pstDydx (31Dec2024)',
      display: 'pstDYDX31Dec2024',
      symbol: 'pstDYDX-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'p:stadydx:31Dec2025',
          exponent: 0
        }, {
          denom: 'pstDYDX31Dec2025',
          exponent: 18
        }],
      base: 'p:stadydx:31Dec2025',
      name: 'pstDydx (31Dec2025)',
      display: 'pstDYDX31Dec2025',
      symbol: 'pstDYDX-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'p:udatom:31Dec2024',
          exponent: 0
        }, {
          denom: 'pdATOM31Dec2024',
          exponent: 6
        }],
      base: 'p:udatom:31Dec2024',
      name: 'pdAtom (31Dec2024)',
      display: 'pdATOM31Dec2024',
      symbol: 'pdATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'p:udatom:30Jun2025',
          exponent: 0
        }, {
          denom: 'pdATOM30Jun2025',
          exponent: 6
        }],
      base: 'p:udatom:30Jun2025',
      name: 'pdAtom (30Jun2025)',
      display: 'pdATOM30Jun2025',
      symbol: 'pdATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'p:udatom:31Dec2025',
          exponent: 0
        }, {
          denom: 'pdATOM31Dec2025',
          exponent: 6
        }],
      base: 'p:udatom:31Dec2025',
      name: 'pdAtom (31Dec2025)',
      display: 'pdATOM31Dec2025',
      symbol: 'pdATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'p:utia:31Dec2024',
          exponent: 0
        }, {
          denom: 'pTIA31Dec2024',
          exponent: 6
        }],
      base: 'p:utia:31Dec2024',
      name: 'pTia (31Dec2024)',
      display: 'pTIA31Dec2024',
      symbol: 'pTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'p:utia:31Dec2025',
          exponent: 0
        }, {
          denom: 'pTIA31Dec2025',
          exponent: 6
        }],
      base: 'p:utia:31Dec2025',
      name: 'pTia (31Dec2025)',
      display: 'pTIA31Dec2025',
      symbol: 'pTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2024',
      denom_units: [{
          denom: 'y:uatom:30Sep2024',
          exponent: 0
        }, {
          denom: 'yATOM30Sep2024',
          exponent: 6
        }],
      base: 'y:uatom:30Sep2024',
      name: 'yAtom (30Sep2024)',
      display: 'yATOM30Sep2024',
      symbol: 'yATOM-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'y:uatom:31Dec2024',
          exponent: 0
        }, {
          denom: 'yATOM31Dec2024',
          exponent: 6
        }],
      base: 'y:uatom:31Dec2024',
      name: 'yAtom (31Dec2024)',
      display: 'yATOM31Dec2024',
      symbol: 'yATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'y:uatom:31Dec2025',
          exponent: 0
        }, {
          denom: 'yATOM31Dec2025',
          exponent: 6
        }],
      base: 'y:uatom:31Dec2025',
      name: 'yAtom (31Dec2025)',
      display: 'yATOM31Dec2025',
      symbol: 'yATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2024',
      denom_units: [{
          denom: 'y:uosmo:30Sep2024',
          exponent: 0
        }, {
          denom: 'yOSMO30Sep2024',
          exponent: 6
        }],
      base: 'y:uosmo:30Sep2024',
      name: 'yOsmo (30Sep2024)',
      display: 'yOSMO30Sep2024',
      symbol: 'yOSMO-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2024',
      denom_units: [{
          denom: 'y:uosmo:31Dec2024',
          exponent: 0
        }, {
          denom: 'yOSMO31Dec2024',
          exponent: 6
        }],
      base: 'y:uosmo:31Dec2024',
      name: 'yOsmo (31Dec2024)',
      display: 'yOSMO31Dec2024',
      symbol: 'yOSMO-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2025',
      denom_units: [{
          denom: 'y:uosmo:31Dec2025',
          exponent: 0
        }, {
          denom: 'yOSMO31Dec2025',
          exponent: 6
        }],
      base: 'y:uosmo:31Dec2025',
      name: 'yOsmo (31Dec2025)',
      display: 'yOSMO31Dec2025',
      symbol: 'yOSMO-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2024',
      denom_units: [{
          denom: 'y:inj:30Sep2024',
          exponent: 0
        }, {
          denom: 'yINJ30Sep2024',
          exponent: 18
        }],
      base: 'y:inj:30Sep2024',
      name: 'yInj (30Sep2024)',
      display: 'yINJ30Sep2024',
      symbol: 'yINJ-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2024',
      denom_units: [{
          denom: 'y:inj:31Dec2024',
          exponent: 0
        }, {
          denom: 'yINJ31Dec2024',
          exponent: 18
        }],
      base: 'y:inj:31Dec2024',
      name: 'yInj (31Dec2024)',
      display: 'yINJ31Dec2024',
      symbol: 'yINJ-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2025',
      denom_units: [{
          denom: 'y:inj:31Dec2025',
          exponent: 0
        }, {
          denom: 'yINJ31Dec2025',
          exponent: 18
        }],
      base: 'y:inj:31Dec2025',
      name: 'yInj (31Dec2025)',
      display: 'yINJ31Dec2025',
      symbol: 'yINJ-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'y:uluna:30Sep2024',
          exponent: 0
        }, {
          denom: 'yLUNA30Sep2024',
          exponent: 6
        }],
      base: 'y:uluna:30Sep2024',
      name: 'yLuna (30Sep2024)',
      display: 'yLUNA30Sep2024',
      symbol: 'yLUNA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'y:uluna:31Dec2024',
          exponent: 0
        }, {
          denom: 'yLUNA31Dec2024',
          exponent: 6
        }],
      base: 'y:uluna:31Dec2024',
      name: 'yLuna (31Dec2024)',
      display: 'yLUNA31Dec2024',
      symbol: 'yLUNA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'y:uluna:31Dec2025',
          exponent: 0
        }, {
          denom: 'yLUNA31Dec2025',
          exponent: 6
        }],
      base: 'y:uluna:31Dec2025',
      name: 'yLuna (31Dec2025)',
      display: 'yLUNA31Dec2025',
      symbol: 'yLUNA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Sep2024',
      denom_units: [{
          denom: 'y:uauuu:30Sep2024',
          exponent: 0
        }, {
          denom: 'yAUUU30Sep2024',
          exponent: 6
        }],
      base: 'y:uauuu:30Sep2024',
      name: 'yAuuu (30Sep2024)',
      display: 'yAUUU30Sep2024',
      symbol: 'yAUUU-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2024',
      denom_units: [{
          denom: 'y:uauuu:31Dec2024',
          exponent: 0
        }, {
          denom: 'yAUUU31Dec2024',
          exponent: 6
        }],
      base: 'y:uauuu:31Dec2024',
      name: 'yAuuu (31Dec2024)',
      display: 'yAUUU31Dec2024',
      symbol: 'yAUUU-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2025',
      denom_units: [{
          denom: 'y:uauuu:31Dec2025',
          exponent: 0
        }, {
          denom: 'yAUUU31Dec2025',
          exponent: 6
        }],
      base: 'y:uauuu:31Dec2025',
      name: 'yAuuu (31Dec2025)',
      display: 'yAUUU31Dec2025',
      symbol: 'yAUUU-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Sep2024',
      denom_units: [{
          denom: 'y:stutia:30Sep2024',
          exponent: 0
        }, {
          denom: 'ystTIA30Sep2024',
          exponent: 6
        }],
      base: 'y:stutia:30Sep2024',
      name: 'ystTia (30Sep2024)',
      display: 'ystTIA30Sep2024',
      symbol: 'ystTIA-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'y:stutia:31Dec2024',
          exponent: 0
        }, {
          denom: 'ystTIA31Dec2024',
          exponent: 6
        }],
      base: 'y:stutia:31Dec2024',
      name: 'ystTia (31Dec2024)',
      display: 'ystTIA31Dec2024',
      symbol: 'ystTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'y:stutia:31Dec2025',
          exponent: 0
        }, {
          denom: 'ystTIA31Dec2025',
          exponent: 6
        }],
      base: 'y:stutia:31Dec2025',
      name: 'ystTia (31Dec2025)',
      display: 'ystTIA31Dec2025',
      symbol: 'ystTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Sep2024',
      denom_units: [{
          denom: 'y:stadydx:30Sep2024',
          exponent: 0
        }, {
          denom: 'ystDYDX30Sep2024',
          exponent: 6
        }],
      base: 'y:stadydx:30Sep2024',
      name: 'ystDydx (30Sep2024)',
      display: 'ystDYDX30Sep2024',
      symbol: 'ystDYDX-30Sep2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2024',
      denom_units: [{
          denom: 'y:stadydx:31Dec2024',
          exponent: 0
        }, {
          denom: 'ystDYDX31Dec2024',
          exponent: 6
        }],
      base: 'y:stadydx:31Dec2024',
      name: 'ystDydx (31Dec2024)',
      display: 'ystDYDX31Dec2024',
      symbol: 'ystDYDX-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2025',
      denom_units: [{
          denom: 'y:stadydx:31Dec2025',
          exponent: 0
        }, {
          denom: 'ystDYDX31Dec2025',
          exponent: 6
        }],
      base: 'y:stadydx:31Dec2025',
      name: 'ystDydx (31Dec2025)',
      display: 'ystDYDX31Dec2025',
      symbol: 'ystDYDX-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2024',
      denom_units: [{
          denom: 'y:udatom:31Dec2024',
          exponent: 0
        }, {
          denom: 'ydATOM31Dec2024',
          exponent: 6
        }],
      base: 'y:udatom:31Dec2024',
      name: 'ydAtom (31Dec2024)',
      display: 'ydATOM31Dec2024',
      symbol: 'ydATOM-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 30Jun2025',
      denom_units: [{
          denom: 'y:udatom:30Jun2025',
          exponent: 0
        }, {
          denom: 'ydATOM30Jun2025',
          exponent: 6
        }],
      base: 'y:udatom:30Jun2025',
      name: 'ydAtom (30Jun2025)',
      display: 'ydATOM30Jun2025',
      symbol: 'ydATOM-30Jun2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2025',
      denom_units: [{
          denom: 'y:udatom:31Dec2025',
          exponent: 0
        }, {
          denom: 'ydATOM31Dec2025',
          exponent: 6
        }],
      base: 'y:udatom:31Dec2025',
      name: 'ydAtom (31Dec2025)',
      display: 'ydATOM31Dec2025',
      symbol: 'ydATOM-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2024',
      denom_units: [{
          denom: 'y:utia:31Dec2024',
          exponent: 0
        }, {
          denom: 'yTIA31Dec2024',
          exponent: 6
        }],
      base: 'y:utia:31Dec2024',
      name: 'yTia (31Dec2024)',
      display: 'yTIA31Dec2024',
      symbol: 'yTIA-31Dec2024',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2025',
      denom_units: [{
          denom: 'y:utia:31Dec2025',
          exponent: 0
        }, {
          denom: 'yTIA31Dec2025',
          exponent: 6
        }],
      base: 'y:utia:31Dec2025',
      name: 'yTia (31Dec2025)',
      display: 'yTIA31Dec2025',
      symbol: 'yTIA-31Dec2025',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for USDC / USDC.axl pool',
      denom_units: [{
          denom: 'lp:6:uusdc.axl-uusdc',
          exponent: 0
        }, {
          denom: 'lp:6:usdc.axl-usdc',
          exponent: 6
        }],
      base: 'lp:6:uusdc.axl-uusdc',
      name: 'USDC / USDC.axl LP',
      display: 'lp:6:usdc.axl-usdc',
      symbol: 'USDC-USDC.axl-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for ATOM Yield pool',
      denom_units: [{
          denom: 'lp:0:uatom',
          exponent: 0
        }, {
          denom: 'lp:0:atom',
          exponent: 6
        }],
      base: 'lp:0:uatom',
      name: 'ATOM Yield LP',
      display: 'lp:0:atom',
      symbol: 'ATOM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for ATOM Boost pool',
      denom_units: [{
          denom: 'lp:2:uatomypt-uatom',
          exponent: 0
        }, {
          denom: 'lp:2:atomypt-atom',
          exponent: 6
        }],
      base: 'lp:2:uatomypt-uatom',
      name: 'ATOM Boost LP',
      display: 'lp:2:atomypt-atom',
      symbol: 'ATOM-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for ATOM / USDC pool',
      denom_units: [{
          denom: 'lp:3:uatom-uusdc',
          exponent: 0
        }, {
          denom: 'lp:3:atom-usdc',
          exponent: 6
        }],
      base: 'lp:3:uatom-uusdc',
      name: 'ATOM / USDC LP',
      display: 'lp:3:atom-usdc',
      symbol: 'ATOM-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for INJ Yield pool',
      denom_units: [{
          denom: 'lp:1:inj',
          exponent: 0
        }, {
          denom: 'lp:1:INJ',
          exponent: 18
        }],
      base: 'lp:1:inj',
      name: 'INJ Yield LP',
      display: 'lp:1:INJ',
      symbol: 'INJ-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for INJ Boost pool',
      denom_units: [{
          denom: 'lp:4:injypt-inj',
          exponent: 0
        }, {
          denom: 'lp:4:INJypt-INJ',
          exponent: 18
        }],
      base: 'lp:4:injypt-inj',
      name: 'INJ Boost LP',
      display: 'lp:4:INJypt-INJ',
      symbol: 'INJ-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for INJ / USDC pool',
      denom_units: [{
          denom: 'lp:5:inj-uusdc',
          exponent: 0
        }, {
          denom: 'lp:5:INJ-usdc',
          exponent: 18
        }],
      base: 'lp:5:inj-uusdc',
      name: 'INJ / USDC LP',
      display: 'lp:5:INJ-usdc',
      symbol: 'INJ-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denom_units: [{
          denom: 'lp:8:uosmo',
          exponent: 0
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      base: 'lp:8:uosmo',
      name: 'OSMO Yield LP',
      display: 'lp:8:osmo',
      symbol: 'OSMO-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for OSMO Boost pool',
      denom_units: [{
          denom: 'lp:10:uosmoypt-uosmo',
          exponent: 0
        }, {
          denom: 'lp:10:osmoypt-osmo',
          exponent: 6
        }],
      base: 'lp:10:uosmoypt-uosmo',
      name: 'OSMO Boost LP',
      display: 'lp:10:osmoypt-osmo',
      symbol: 'OSMO-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for OSMO / USDC pool',
      denom_units: [{
          denom: 'lp:11:uosmo-uusdc',
          exponent: 0
        }, {
          denom: 'lp:11:osmo-usdc',
          exponent: 6
        }],
      base: 'lp:11:uosmo-uusdc',
      name: 'OSMO / USDC LP',
      display: 'lp:11:osmo-usdc',
      symbol: 'OSMO-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for LUNA Yield pool',
      denom_units: [{
          denom: 'lp:9:uluna',
          exponent: 0
        }, {
          denom: 'lp:9:luna',
          exponent: 6
        }],
      base: 'lp:9:uluna',
      name: 'LUNA Yield LP',
      display: 'lp:9:luna',
      symbol: 'LUNA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for LUNA Boost pool',
      denom_units: [{
          denom: 'lp:12:ulunaypt-uluna',
          exponent: 0
        }, {
          denom: 'lp:12:lunaypt-luna',
          exponent: 6
        }],
      base: 'lp:12:ulunaypt-uluna',
      name: 'LUNA Boost LP',
      display: 'lp:12:lunaypt-luna',
      symbol: 'LUNA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for LUNA / USDC pool',
      denom_units: [{
          denom: 'lp:13:uluna-uusdc',
          exponent: 0
        }, {
          denom: 'lp:13:luna-usdc',
          exponent: 6
        }],
      base: 'lp:13:uluna-uusdc',
      name: 'LUNA / USDC LP',
      display: 'lp:13:luna-usdc',
      symbol: 'LUNA-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for AUUU Yield pool',
      denom_units: [{
          denom: 'lp:14:uauuu',
          exponent: 0
        }, {
          denom: 'lp:14:auuu',
          exponent: 6
        }],
      base: 'lp:14:uauuu',
      name: 'AUUU Yield LP',
      display: 'lp:14:auuu',
      symbol: 'AUUU-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for AUUU Boost pool',
      denom_units: [{
          denom: 'lp:17:uauuuypt-uauuu',
          exponent: 0
        }, {
          denom: 'lp:17:auuuypt-auuu',
          exponent: 6
        }],
      base: 'lp:17:uauuuypt-uauuu',
      name: 'AUUU Boost LP',
      display: 'lp:17:auuuypt-auuu',
      symbol: 'AUUU-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for AUUU / USDC pool',
      denom_units: [{
          denom: 'lp:7:uauuu-uusdc',
          exponent: 0
        }, {
          denom: 'lp:7:auuu-usdc',
          exponent: 6
        }],
      base: 'lp:7:uauuu-uusdc',
      name: 'AUUU / USDC LP',
      display: 'lp:7:auuu-usdc',
      symbol: 'AUUU-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Yield pool',
      denom_units: [{
          denom: 'lp:15:stadydx',
          exponent: 0
        }, {
          denom: 'lp:15:stdydx',
          exponent: 18
        }],
      base: 'lp:15:stadydx',
      name: 'stDYDX Yield LP',
      display: 'lp:15:stdydx',
      symbol: 'stDYDX-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Boost pool',
      denom_units: [{
          denom: 'lp:18:stadydxypt-adydx',
          exponent: 0
        }, {
          denom: 'lp:18:stdydxypt-dydx',
          exponent: 18
        }],
      base: 'lp:18:stadydxypt-adydx',
      name: 'stDYDX Boost LP',
      display: 'lp:18:stdydxypt-dydx',
      symbol: 'stDYDX-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for DYDX / USDC pool',
      denom_units: [{
          denom: 'lp:19:adydx-uusdc',
          exponent: 0
        }, {
          denom: 'lp:19:dydx-usdc',
          exponent: 18
        }],
      base: 'lp:19:adydx-uusdc',
      name: 'DYDX / USDC LP',
      display: 'lp:19:dydx-usdc',
      symbol: 'DYDX-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for stTIA Yield pool',
      denom_units: [{
          denom: 'lp:16:stutia',
          exponent: 0
        }, {
          denom: 'lp:16:sttia',
          exponent: 6
        }],
      base: 'lp:16:stutia',
      name: 'stTIA Yield LP',
      display: 'lp:16:sttia',
      symbol: 'stTIA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for stTIA Boost pool',
      denom_units: [{
          denom: 'lp:20:stutiaypt-utia',
          exponent: 0
        }, {
          denom: 'lp:20:sttiaypt-tia',
          exponent: 6
        }],
      base: 'lp:20:stutiaypt-utia',
      name: 'stTIA Boost LP',
      display: 'lp:20:sttiaypt-tia',
      symbol: 'stTIA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for TIA Yield pool',
      denom_units: [{
          denom: 'lp:24:utia',
          exponent: 0
        }, {
          denom: 'lp:24:tia',
          exponent: 6
        }],
      base: 'lp:24:utia',
      name: 'TIA Yield LP',
      display: 'lp:24:tia',
      symbol: 'TIA-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for TIA Boost pool',
      denom_units: [{
          denom: 'lp:25:utiaypt-utia',
          exponent: 0
        }, {
          denom: 'lp:25:tiaypt-tia',
          exponent: 6
        }],
      base: 'lp:25:utiaypt-utia',
      name: 'TIA Boost LP',
      display: 'lp:25:tiaypt-tia',
      symbol: 'TIA-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for TIA / USDC pool',
      denom_units: [{
          denom: 'lp:21:utia-uusdc',
          exponent: 0
        }, {
          denom: 'lp:21:tia-usdc',
          exponent: 6
        }],
      base: 'lp:21:utia-uusdc',
      name: 'TIA / USDC LP',
      display: 'lp:21:tia-usdc',
      symbol: 'TIA-USDC-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for dATOM Yield pool',
      denom_units: [{
          denom: 'lp:22:udatom',
          exponent: 0
        }, {
          denom: 'lp:22:datom',
          exponent: 6
        }],
      base: 'lp:22:udatom',
      name: 'dATOM Yield LP',
      display: 'lp:22:datom',
      symbol: 'dATOM-YIELD-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for dATOM Boost pool',
      denom_units: [{
          denom: 'lp:23:udatomypt-uatom',
          exponent: 0
        }, {
          denom: 'lp:23:datomypt-atom',
          exponent: 6
        }],
      base: 'lp:23:udatomypt-uatom',
      name: 'dATOM Boost LP',
      display: 'lp:23:datomypt-atom',
      symbol: 'dATOM-BOOST-LP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      type_asset: 'sdk.coin'
    }
  ]
};
export default info;