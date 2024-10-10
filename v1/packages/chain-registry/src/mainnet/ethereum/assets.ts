import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'ethereum',
  assets: [
    {
      description: 'Ethereum is a decentralized blockchain platform for running smart contracts and dApps, with Ether (ETH) as its native cryptocurrency, enabling a versatile ecosystem beyond just digital currency.',
      extended_description: 'Ethereum, symbolized as ETH, is a groundbreaking cryptocurrency and blockchain platform introduced in 2015 by a team led by Vitalik Buterin. Unlike Bitcoin, which primarily serves as a digital currency, Ethereum is designed to be a decentralized platform for running smart contracts and decentralized applications (dApps). These smart contracts are self-executing contracts with the terms directly written into code, enabling trustless and automated transactions without intermediaries. Ethereum\'s blockchain can host a wide variety of applications, from financial services to gaming, making it a versatile and powerful tool in the world of blockchain technology.\n\nOne of the most notable features of Ethereum is its native cryptocurrency, Ether (ETH), which is used to pay for transaction fees and computational services on the network. Ethereum has also been the backbone for the explosive growth of decentralized finance (DeFi), which seeks to recreate traditional financial systems with blockchain-based alternatives. Additionally, Ethereum is undergoing a significant upgrade known as Ethereum 2.0, which aims to improve scalability, security, and energy efficiency through a shift from proof-of-work (PoW) to proof-of-stake (PoS) consensus mechanisms. This transition is expected to enhance the network\'s performance and reduce its environmental impact, further solidifying Ethereum\'s position as a leading platform in the blockchain ecosystem.',
      denom_units: [
        {
          denom: 'wei',
          exponent: 0
        },
        {
          denom: 'gwei',
          exponent: 9
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ether']
        }
      ],
      type_asset: 'evm-base',
      base: 'wei',
      name: 'Ether',
      display: 'eth',
      symbol: 'ETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      coingecko_id: 'ethereum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          theme: {
            primary_color_hex: '#303030'
          }
        }]
    },
    {
      description: 'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      type_asset: 'erc20',
      address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      denom_units: [{
          denom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
          exponent: 0,
          aliases: ['aave-wei']
        }, {
          denom: 'aave',
          exponent: 18
        }],
      base: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      coingecko_id: 'aave',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }]
    },
    {
      description: 'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      type_asset: 'erc20',
      address: '0x4d224452801aced8b2f0aebe155379bb5d594381',
      denom_units: [{
          denom: '0x4d224452801aced8b2f0aebe155379bb5d594381',
          exponent: 0,
          aliases: ['ape-wei']
        }, {
          denom: 'ape',
          exponent: 18
        }],
      base: '0x4d224452801aced8b2f0aebe155379bb5d594381',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      coingecko_id: 'apecoin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }]
    },
    {
      description: 'Axie Infinity is a Pokémon-inspired digital pet universe where anyone can earn tokens through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets (known as Axies).',
      type_asset: 'erc20',
      address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
      denom_units: [{
          denom: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
          exponent: 0,
          aliases: ['axs-wei']
        }, {
          denom: 'axs',
          exponent: 18
        }],
      base: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
      name: 'Axie Infinity Shard',
      display: 'axs',
      symbol: 'AXS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
      },
      coingecko_id: 'axie-infinity',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg'
        }]
    },
    {
      description: 'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      type_asset: 'erc20',
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      denom_units: [{
          denom: '0x6b175474e89094c44da98b954eedeac495271d0f',
          exponent: 0,
          aliases: ['dai-wei']
        }, {
          denom: 'dai',
          exponent: 18
        }],
      base: '0x6b175474e89094c44da98b954eedeac495271d0f',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'MakerDAO'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      coingecko_id: 'dai',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'sDAI is a liquid representation of DAI deposited in the Dai savings rate contract.',
      type_asset: 'erc20',
      address: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
      denom_units: [{
          denom: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
          exponent: 0,
          aliases: ['sdai-wei']
        }, {
          denom: 'sdai',
          exponent: 18
        }],
      base: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
      name: 'Savings Dai',
      display: 'sdai',
      symbol: 'sDAI',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'MakerDAO'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg'
      },
      coingecko_id: 'dai',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sdai.svg',
          theme: {
            primary_color_hex: '#7ec231'
          }
        }]
    },
    {
      description: 'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      type_asset: 'erc20',
      address: '0x853d955acef822db058eb8505911ed77f175b99e',
      denom_units: [{
          denom: '0x853d955acef822db058eb8505911ed77f175b99e',
          exponent: 0,
          aliases: ['frax-wei']
        }, {
          denom: 'frax',
          exponent: 18
        }],
      base: '0x853d955acef822db058eb8505911ed77f175b99e',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Frax Protocol'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      coingecko_id: 'frax',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      type_asset: 'erc20',
      address: '0x514910771af9ca656af840dff83e8264ecf986ca',
      denom_units: [{
          denom: '0x514910771af9ca656af840dff83e8264ecf986ca',
          exponent: 0,
          aliases: ['link-wei']
        }, {
          denom: 'link',
          exponent: 18
        }],
      base: '0x514910771af9ca656af840dff83e8264ecf986ca',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      coingecko_id: 'chainlink',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg',
          theme: {
            primary_color_hex: '#2c5cdc'
          }
        }]
    },
    {
      description: 'Maker is a decentralized finance (DeFi) platform on the Ethereum blockchain that facilitates the creation of the stablecoin DAI, which is pegged to the US dollar.',
      extended_description: 'Maker is a leading DeFi platform on Ethereum, known for its stablecoin DAI, which is soft-pegged to the US dollar. Users can generate DAI by locking collateral such as ETH in Maker Vaults. The Maker Protocol, governed by the MKR token holders, ensures the stability and security of DAI through decentralized governance mechanisms. MKR tokens are used for voting on governance proposals and for recapitalizing the system if necessary. Maker has become a cornerstone of the DeFi ecosystem, providing a reliable and decentralized stablecoin for various financial applications.',
      type_asset: 'erc20',
      address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      denom_units: [{
          denom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
          exponent: 0,
          aliases: ['mkr-wei']
        }, {
          denom: 'mkr',
          exponent: 18
        }],
      base: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      coingecko_id: 'maker',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }]
    },
    {
      description: 'RAI is a non-pegged, ETH-backed stable asset. It is useful as more \'stable\' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.',
      type_asset: 'erc20',
      address: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
      denom_units: [{
          denom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
          exponent: 0,
          aliases: ['rai-wei']
        }, {
          denom: 'rai',
          exponent: 18
        }],
      base: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'RAI Finance'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      coingecko_id: 'rai',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }]
    },
    {
      description: 'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      type_asset: 'erc20',
      address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
      denom_units: [{
          denom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
          exponent: 0,
          aliases: ['shib-wei']
        }, {
          denom: 'shib',
          exponent: 18
        }],
      base: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      coingecko_id: 'shiba-inu',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg',
          theme: {
            primary_color_hex: '#FFA409',
            background_color_hex: '#00000000'
          }
        }]
    },
    {
      description: 'stETH is a token that represents staked ether in Lido, combining the value of initial deposit + staking rewards. stETH tokens are pegged 1:1 to the ETH staked with Lido and can be used as one would use ether, allowing users to earn Eth2 staking rewards whilst benefiting from Defi yields.',
      type_asset: 'erc20',
      address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
      denom_units: [{
          denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
          exponent: 0,
          aliases: ['steth-wei']
        }, {
          denom: 'steth',
          exponent: 18
        }],
      base: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
      name: 'Lido Staked Ether',
      display: 'steth',
      symbol: 'stETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Lido'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
      },
      coingecko_id: 'staked-ether',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
        }]
    },
    {
      description: 'wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.',
      type_asset: 'erc20',
      address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      denom_units: [{
          denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
          exponent: 0,
          aliases: ['wsteth-wei']
        }, {
          denom: 'wsteth',
          exponent: 18
        }],
      base: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      name: 'Wrapped Lido Staked Ether',
      display: 'wsteth',
      symbol: 'wstETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Lido'
        }],
      coingecko_id: 'wrapped-steth',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }]
    },
    {
      description: 'Frax Ether is a liquid ETH staking derivative designed to uniquely leverage the Frax Finance ecosystem. frxETH acts as a stablecoin loosely pegged to ETH, leveraging Frax\'s winning playbook on stablecoins and onboarding ETH into the Frax ecosystem.',
      type_asset: 'erc20',
      address: '0x5e8422345238f34275888049021821e8e08caa1f',
      denom_units: [{
          denom: '0x5e8422345238f34275888049021821e8e08caa1f',
          exponent: 0,
          aliases: ['frxeth-wei']
        }, {
          denom: 'frxeth',
          exponent: 18
        }],
      base: '0x5e8422345238f34275888049021821e8e08caa1f',
      name: 'Frax Ether',
      display: 'frxeth',
      symbol: 'frxETH',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Frax'
        }],
      coingecko_id: 'frax-ether',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg'
      }
    },
    {
      description: 'sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one becomes eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.',
      type_asset: 'erc20',
      address: '0xac3e018457b222d93114458476f3e3416abbe38f',
      denom_units: [{
          denom: '0xac3e018457b222d93114458476f3e3416abbe38f',
          exponent: 0,
          aliases: ['sfrxeth-wei']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      base: '0xac3e018457b222d93114458476f3e3416abbe38f',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Frax'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      coingecko_id: 'staked-frax-ether',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }]
    },
    {
      description: 'Rocket Pool is a decentralised Ethereum Proof of Stake pool.',
      type_asset: 'erc20',
      address: '0xae78736cd615f374d3085123a210448e74fc6393',
      denom_units: [{
          denom: '0xae78736cd615f374d3085123a210448e74fc6393',
          exponent: 0,
          aliases: ['reth-wei']
        }, {
          denom: 'reth',
          exponent: 18
        }],
      base: '0xae78736cd615f374d3085123a210448e74fc6393',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Rocket Pool'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      coingecko_id: 'rocket-pool-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png',
          theme: {
            primary_color_hex: '#fba487'
          }
        }]
    },
    {
      description: 'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.',
      type_asset: 'erc20',
      address: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
      denom_units: [{
          denom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
          exponent: 0,
          aliases: ['cbeth-wei']
        }, {
          denom: 'cbeth',
          exponent: 18
        }],
      base: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Coinbase'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      coingecko_id: 'coinbase-wrapped-staked-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png',
          theme: {
            primary_color_hex: '#c9dbfc'
          }
        }]
    },
    {
      description: 'UNI token served as governance token for Uniswap protocol with 1 billion UNI have been minted at genesis. 60% of the UNI genesis supply is allocated to Uniswap community members and remaining for team, investors and advisors.',
      type_asset: 'erc20',
      address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      denom_units: [{
          denom: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
          exponent: 0,
          aliases: ['uni-wei']
        }, {
          denom: 'uni',
          exponent: 18
        }],
      base: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      name: 'Uniswap',
      display: 'uni',
      symbol: 'UNI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
      },
      coingecko_id: 'uniswap',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg'
        }]
    },
    {
      description: 'USDC (USD Coin) is a stablecoin fully backed by US dollars, providing a transparent and regulated digital dollar solution.',
      extended_description: 'USD Coin (USDC) was launched in 2018 as a joint effort between Coinbase and Circle. USDC is a fully reserved stablecoin, meaning each token is backed 1:1 by US dollars held in reserve. This structure is designed to provide transparency and trust, reinforced by regular audits from reputable third-party firms. Initially built on the Ethereum blockchain, USDC has expanded to support multiple blockchain networks, including Algorand, Solana, and more. It is widely used in DeFi protocols, as collateral, and for international transactions, offering a stable and compliant digital dollar solution.',
      type_asset: 'erc20',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      denom_units: [{
          denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      coingecko_id: 'usd-coin',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          }
        }]
    },
    {
      description: 'USDT (Tether) is a stablecoin that is pegged to the US dollar, designed to provide stability and liquidity within the cryptocurrency market.',
      extended_description: 'Tether (USDT) is a pioneering stablecoin introduced in 2014 by Tether Limited. It aims to provide stability and liquidity by maintaining a 1:1 value ratio with the US dollar. USDT operates across multiple blockchain platforms, including Ethereum, Tron, and others, enhancing its accessibility and interoperability. It is widely used for trading, hedging against market volatility, and facilitating quick transfers between exchanges. Despite facing scrutiny over its transparency and backing reserves, USDT remains a cornerstone in the crypto market, offering a stable digital asset that bridges traditional finance and cryptocurrencies.',
      type_asset: 'erc20',
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      denom_units: [{
          denom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Tether'
        }],
      coingecko_id: 'tether',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt_logomark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt_logomark.svg',
          theme: {
            circle: false,
            primary_color_hex: '#50AF95',
            background_color_hex: '#00000000'
          }
        }],
      socials: {
        website: 'https://tether.to/',
        twitter: 'https://x.com/Tether_to'
      }
    },
    {
      description: 'Wrapped Bitcoin (WBTC) is an ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
      type_asset: 'erc20',
      address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      denom_units: [{
          denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      base: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      coingecko_id: 'wrapped-bitcoin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
          theme: {
            primary_color_hex: '#f39444'
          }
        }]
    },
    {
      description: 'wETH is \'wrapped ETH\'',
      type_asset: 'erc20',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      denom_units: [{
          denom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          exponent: 0,
          aliases: ['weth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      base: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'WETH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Ethereum'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      coingecko_id: 'weth',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }]
    },
    {
      description: 'Chain is a cloud blockchain protocol that enables organizations to build better financial services from the ground up powered by Sequence and Chain Core.',
      type_asset: 'erc20',
      address: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
      denom_units: [{
          denom: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
          exponent: 0,
          aliases: ['xcn-wei']
        }, {
          denom: 'xcn',
          exponent: 18
        }],
      base: '0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18',
      name: 'Chain',
      display: 'xcn',
      symbol: 'XCN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
      },
      coingecko_id: 'chain-2',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg'
        }]
    },
    {
      description: 'Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.',
      type_asset: 'erc20',
      address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      denom_units: [{
          denom: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
          exponent: 0,
          aliases: ['busd-wei']
        }, {
          denom: 'busd',
          exponent: 18
        }],
      base: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Binance'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
      },
      coingecko_id: 'binance-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg',
          theme: {
            primary_color_hex: '#f3bb0c'
          }
        }]
    },
    {
      description: 'Pepe is a community based memecoin with one mission: to make memecoins great again. Made to honor the iconic meme we all know and love, Pepe is here to take reign as the most memeable memecoin in existence, fueled purely by memetic power. Pepe is for the people.',
      type_asset: 'erc20',
      address: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
      denom_units: [{
          denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
          exponent: 0,
          aliases: ['pepe-wei']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      base: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      coingecko_id: 'pepe',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          theme: {
            primary_color_hex: '#cc3233'
          }
        }],
      keywords: ['meme']
    },
    {
      description: 'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      type_asset: 'erc20',
      address: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
      denom_units: [{
          denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
          exponent: 0
        }, {
          denom: 'YieldETH',
          exponent: 18
        }],
      base: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
      name: 'Real Yield ETH',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Seven Seas & DeFine Logic Labs'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      coingecko_id: 'yieldeth-sommelier',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg',
          theme: {
            primary_color_hex: '#14448c'
          }
        }]
    },
    {
      description: 'TBTC replaces centralized intermediaries with a randomly selected group of nodes on the Threshold Network. This group of independent nodes works together to secure your deposited Bitcoin through threshold cryptography. TBTC allows anyone to use Bitcoin in the expanding DeFi and Web3 universe.',
      denom_units: [{
          denom: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
          exponent: 0,
          aliases: []
        }, {
          denom: 'tBTC',
          exponent: 18,
          aliases: []
        }],
      type_asset: 'erc20',
      address: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
      base: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
      display: 'tBTC',
      name: 'tBTC v2',
      symbol: 'tBTC',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Threshold Network'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
      },
      coingecko_id: 'tbtc',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
        }]
    },
    {
      description: 'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.',
      denom_units: [{
          denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
          exponent: 0,
          aliases: []
        }, {
          denom: 'pstake',
          exponent: 18,
          aliases: []
        }],
      type_asset: 'erc20',
      address: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
      base: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
      display: 'pstake',
      name: 'pSTAKE Finance',
      symbol: 'PSTAKE',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'uxprt'
          },
          provider: 'Persistence'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      coingecko_id: 'pstake-finance',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg',
          theme: {
            primary_color_hex: '#050505'
          }
        }]
    },
    {
      description: 'The OCC token acts as the fuel for the OccamRazer launchpad and it is indirectly used as well on the DAO governance layer.',
      type_asset: 'erc20',
      address: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
      denom_units: [{
          denom: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
          exponent: 0,
          aliases: []
        }, {
          denom: 'occ',
          exponent: 18
        }],
      base: '0x2F109021aFe75B949429fe30523Ee7C0D5B27207',
      name: 'OccamFi',
      display: 'occ',
      symbol: 'OCC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png'
      },
      coingecko_id: 'occamfi',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/occamfi.png',
          theme: {
            primary_color_hex: '#313648'
          }
        }]
    },
    {
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      type_asset: 'erc20',
      address: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
      denom_units: [{
          denom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
          exponent: 0,
          aliases: []
        }, {
          denom: 'page',
          exponent: 8
        }],
      base: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      coingecko_id: 'page',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg',
          theme: {
            primary_color_hex: '#ebb324'
          }
        }]
    },
    {
      description: 'Gelotto blends gaming, DEFI, and fun Dapps in a unique Web3 ecosystem. Join us to become part of the house, earning from all Gelotto products. Our main goal? To bring the masses into Web3 with open, accessible, and enjoyable Dapps.',
      type_asset: 'erc20',
      address: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
      denom_units: [{
          denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
          exponent: 0,
          aliases: []
        }, {
          denom: 'glto',
          exponent: 6
        }],
      base: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg',
          theme: {
            primary_color_hex: '#501cad'
          }
        }]
    },
    {
      type_asset: 'erc20',
      address: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
      denom_units: [{
          denom: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
          exponent: 0,
          aliases: []
        }, {
          denom: 'ox',
          exponent: 18
        }],
      base: '0x78a0A62Fba6Fb21A83FE8a3433d44C73a4017A6f',
      name: 'Open Exchange Token',
      display: 'ox',
      symbol: 'OX',
      coingecko_id: 'open-exchange-token',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ox.svg'
        }]
    },
    {
      description: 'BEAST: Battle, Breed, and Customize unique creatures powered by Ethereum & Cosmos',
      extended_description: 'A monster breeding & battling game with a twist. Each game interaction burns $BEAST tokens, adding a strategic depth to breeding, battling, and customization. Dive into a world where every move counts!',
      type_asset: 'erc20',
      address: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
      denom_units: [{
          denom: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
          exponent: 0,
          aliases: []
        }, {
          denom: 'beast',
          exponent: 6
        }],
      base: '0xA4426666addBE8c4985377d36683D17FB40c31Be',
      name: 'Gelotto BEAST',
      display: 'beast',
      symbol: 'BEAST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png',
          theme: {
            primary_color_hex: '#21172b'
          }
        }]
    },
    {
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS.',
      extended_description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS. PUNDIX has several core use cases, including:\n- Payment for goods and services from merchants through XPOS\n- Gas Fee on PundiX Chain\n- Listing tokens in the XPOS\n- Merchant payments for loyalty programs and ads',
      type_asset: 'erc20',
      address: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
      denom_units: [{
          denom: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
          exponent: 0
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      base: '0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      coingecko_id: 'pundi-x-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg',
          theme: {
            primary_color_hex: '#f1d20c'
          }
        }],
      socials: {
        website: 'https://pundix.com',
        twitter: 'https://x.com/PundiXLabs'
      }
    },
    {
      description: 'Staked FRAX (sFRAX) is an ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins.',
      type_asset: 'erc20',
      address: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
      denom_units: [{
          denom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
          exponent: 0,
          aliases: ['sfrax-wei']
        }, {
          denom: 'sfrax',
          exponent: 18
        }],
      base: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
      name: 'Staked FRAX',
      display: 'sfrax',
      symbol: 'sFRAX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Frax'
        }],
      coingecko_id: 'staked-frax',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg'
      }
    },
    {
      description: 'FXS is the value accrual and governance token of the entire Frax ecosystem. Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC.',
      type_asset: 'erc20',
      address: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      denom_units: [{
          denom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
          exponent: 0,
          aliases: ['fxs-wei']
        }, {
          denom: 'fxs',
          exponent: 18
        }],
      base: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      name: 'Frax Share',
      display: 'fxs',
      symbol: 'FXS',
      coingecko_id: 'frax-share',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg'
      }
    },
    {
      description: 'PAX Gold (PAXG) tokens each represent one fine troy ounce of an LBMA-certified, London Good Delivery physical gold bar, secured in Brink’s vaults.',
      type_asset: 'erc20',
      address: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
      denom_units: [{
          denom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
          exponent: 0,
          aliases: ['paxg-wei']
        }, {
          denom: 'paxg',
          exponent: 18
        }],
      base: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
      name: 'Paxos Gold',
      display: 'paxg',
      symbol: 'PAXG',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'comex',
            base_denom: 'XAU'
          },
          provider: 'Paxos'
        }],
      coingecko_id: 'pax-gold',
      socials: {
        website: 'https://www.paxos.com/paxgold/',
        twitter: 'https://twitter.com/paxosglobal'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg',
          theme: {
            primary_color_hex: '#ebe60e'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg'
      }
    },
    {
      description: 'CRV is the governance token for Curve Finance.',
      type_asset: 'erc20',
      address: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      denom_units: [{
          denom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
          exponent: 0,
          aliases: ['crv-wei']
        }, {
          denom: 'crv',
          exponent: 18
        }],
      base: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      name: 'Curve DAO',
      display: 'crv',
      symbol: 'CRV',
      coingecko_id: 'curve-dao-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png',
          theme: {
            primary_color_hex: '#1fcbdb'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png'
      }
    },
    {
      description: 'A collateralized-debt-position (CDP) stablecoin by Curve DAO.',
      type_asset: 'erc20',
      address: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
      denom_units: [{
          denom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
          exponent: 0,
          aliases: ['crvusd-wei']
        }, {
          denom: 'crvusd',
          exponent: 18
        }],
      base: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
      name: 'crvUSD',
      display: 'crvusd',
      symbol: 'crvUSD',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Curve Finance'
        }],
      coingecko_id: 'crvusd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png',
          theme: {
            primary_color_hex: '#d6e3d9'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png'
      }
    },
    {
      description: 'pxETH is built on top of the Pirex platform and forms the foundation of the Dinero protocol.',
      type_asset: 'erc20',
      address: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
      denom_units: [{
          denom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
          exponent: 0,
          aliases: ['pxeth-wei']
        }, {
          denom: 'pxeth',
          exponent: 18
        }],
      base: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
      name: 'Dinero Staked ETH',
      display: 'pxeth',
      symbol: 'pxETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Dinero'
        }],
      coingecko_id: 'dinero-staked-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png',
          theme: {
            primary_color_hex: '#c3cbd2'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png'
      }
    },
    {
      description: 'eETH is a natively restaked liquid staking token on Ethereum.',
      type_asset: 'erc20',
      address: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
      denom_units: [{
          denom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
          exponent: 0,
          aliases: ['eeth-wei']
        }, {
          denom: 'eeth',
          exponent: 18
        }],
      base: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
      name: 'ether.fi Staked ETH',
      display: 'eeth',
      symbol: 'eETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'EtherFi'
        }],
      coingecko_id: 'ether-fi-staked-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png',
          theme: {
            primary_color_hex: '#5045b7'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png'
      }
    },
    {
      description: 'The native governance token of Ethena.',
      type_asset: 'erc20',
      address: '0x57e114b691db790c35207b2e685d4a43181e6061',
      denom_units: [{
          denom: '0x57e114b691db790c35207b2e685d4a43181e6061',
          exponent: 0,
          aliases: ['ena-wei']
        }, {
          denom: 'ena',
          exponent: 18
        }],
      base: '0x57e114b691db790c35207b2e685d4a43181e6061',
      name: 'Ethena',
      display: 'ena',
      symbol: 'ENA',
      coingecko_id: 'ethena',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png',
          theme: {
            primary_color_hex: '#1c1c1c'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png'
      }
    },
    {
      description: 'Ethena USDe is a synthetic dollar protocol built on Ethereum.',
      type_asset: 'erc20',
      address: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
      denom_units: [{
          denom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
          exponent: 0,
          aliases: ['usde-wei']
        }, {
          denom: 'usde',
          exponent: 18
        }],
      base: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
      name: 'Ethena USDe',
      display: 'usde',
      symbol: 'USDe',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Ethena'
        }],
      coingecko_id: 'ethena-usde',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usde.png',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usde.png'
      }
    },
    {
      description: 'A Liquid Restaking Token (LRT) and Strategy Manager for EigenLayer.',
      type_asset: 'erc20',
      address: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
      denom_units: [{
          denom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
          exponent: 0,
          aliases: ['ezeth-wei']
        }, {
          denom: 'ezeth',
          exponent: 18
        }],
      base: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
      name: 'Renzo Restaked ETH',
      display: 'ezeth',
      symbol: 'ezETH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Renzo'
        }],
      coingecko_id: 'renzo-restaked-eth',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ezeth.png',
          theme: {
            primary_color_hex: '#9bcf2c'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ezeth.png'
      }
    },
    {
      description: 'Ankr is a Web3 decentralized infrastructure provider that helps developers, dapps, and stakers easily interact with multiple blockchains. It allows you to create DApps using API and RPC, staking on Ankr Earn, and use customized blockchain solutions for businesses.',
      type_asset: 'erc20',
      address: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
      denom_units: [{
          denom: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
          exponent: 0,
          aliases: ['ankr-wei']
        }, {
          denom: 'ankr',
          exponent: 18
        }],
      base: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
      name: 'Ankr Network',
      display: 'ankr',
      symbol: 'ANKR',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ankr.svg'
        }],
      coingecko_id: 'ankr',
      socials: {
        website: 'https://www.ankr.com',
        twitter: 'https://x.com/ankr'
      }
    },
    {
      description: 'YUM is the Cacao Swap token, powering decentralised rails.',
      type_asset: 'erc20',
      address: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6',
      denom_units: [{
          denom: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6',
          exponent: 0,
          aliases: ['yum-wei']
        }, {
          denom: 'yum',
          exponent: 18
        }],
      base: '0xcE682c89C63d2850Cb2ca898E44D6c7c30d897a6',
      name: 'Yum',
      display: 'yum',
      symbol: 'YUM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yum.png',
          theme: {
            primary_color_hex: '#33a6e7'
          }
        }],
      socials: {
        website: 'https://cacaoswap.app',
        twitter: 'https://x.com/CacaoSwap'
      }
    },
    {
      description: 'Avail is a web3 infrastructure layer that allows modular execution layers to scale and interoperate in a trust minimized way.',
      type_asset: 'erc20',
      address: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8',
      denom_units: [{
          denom: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8',
          exponent: 0,
          aliases: ['avail-wei', 'avail']
        }, {
          denom: 'AVAIL',
          exponent: 18
        }],
      base: '0xEeB4d8400AEefafC1B2953e0094134A887C76Bd8',
      name: 'Avail',
      display: 'AVAIL',
      symbol: 'AVAIL',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'avail',
            base_denom: 'avail'
          },
          provider: 'Avail Bridge'
        }],
      images: [{
          image_sync: {
            chain_name: 'avail',
            base_denom: 'avail'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avail/images/avail.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avail/images/avail.png',
          theme: {
            circle: false,
            primary_color_hex: '#2B80D7'
          }
        }]
    },
    {
      description: 'EURe is a Euro-backed stablecoin issued by Monerium.',
      extended_description: 'EURe is the first authorized and regulated stablecoin in Europe. It is collateralized by Euro-denominated deposits held in segregated accounts. EURe is issued by Monerium, the first Electronic Money Institution (EMI) to become compliant under the EU\'s MiCA regulations.',
      type_asset: 'erc20',
      address: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f',
      denom_units: [{
          denom: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f',
          exponent: 0,
          aliases: ['eure-wei', 'ueure']
        }, {
          denom: 'eure',
          exponent: 18
        }],
      base: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f',
      name: 'Monerium EUR emoney',
      display: 'eure',
      symbol: 'EURe',
      coingecko_id: 'monerium-eur-money',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'EUR'
          },
          provider: 'Monerium'
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.svg',
          theme: {
            circle: true,
            primary_color_hex: '#0095D7',
            background_color_hex: '#FFFFFF'
          }
        }],
      socials: {
        website: 'https://monerium.com/',
        twitter: 'https://x.com/monerium'
      }
    },
    {
      description: 'LBTC is liquid, yield-bearing, natively cross-chain, and 1:1 backed by bitcoin.',
      extended_description: 'Lombard is dedicated to expanding the digital economy by transforming Bitcoin’s utility from a mere store of value into a productive financial tool. While Bitcoin remains the world’s largest crypto asset, with over $1 trillion worth of Bitcoin often sitting idle, its utility is limited compared to other digital assets. Lombard sees a significant opportunity to change this by connecting Bitcoin to decentralized finance (DeFi).\n\nLombard is driven by the fact that if just 10% of Bitcoin\'s $1.5 trillion market cap flows into DeFi, the total value locked (TVL) in the ecosystem could more than double, catalyzing unprecedented growth and enabling sustainable market dynamics over time. Lombard believes this potential can be unlocked through a security-first liquid Bitcoin primitive—LBTC.\n\nOur flagship product, LBTC, is a secure Bitcoin liquid staked token (LST), designed to empower anyone—from individual holders to large institutions—to amplify the utility of their Bitcoin. It allows users to earn a native yield from providing economic security to networks via Babylon and participate in DeFi, all while maintaining the value of the original asset.\n\nBy building LBTC on top of Babylon, Lombard’s LBTC bridges the gap between Bitcoin’s immense economic value, security capabilities, and the dynamic opportunities within PoS and DeFi ecosystems, marking a transformative phase for Bitcoin in the decentralized economy.',
      type_asset: 'erc20',
      address: '0x8236a87084f8B84306f72007F36F2618A5634494',
      denom_units: [{
          denom: '0x8236a87084f8B84306f72007F36F2618A5634494',
          exponent: 0
        }, {
          denom: 'lbtc',
          exponent: 8
        }],
      base: '0x8236a87084f8B84306f72007F36F2618A5634494',
      name: 'Lombard Staked Bitcoin',
      display: 'lbtc',
      symbol: 'LBTC',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Lombard'
        }],
      coingecko_id: 'lombard-staked-btc',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/lbtc.svg',
          theme: {
            circle: true,
            primary_color_hex: '#162E2F'
          }
        }],
      socials: {
        website: 'https://lombard.finance',
        twitter: 'https://x.com/Lombard_Finance'
      }
    }
  ]
};
export default info;