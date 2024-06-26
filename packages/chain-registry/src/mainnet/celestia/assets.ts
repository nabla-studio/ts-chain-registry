import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'celestia',
  assets: [{
      description: 'The native token of the Celestia blockchain.',
      extended_description: 'Celestia is a modular data availability network. It simplifies the process of launching blockchains, making blockchain technology more accessible and user-friendly. Unlike traditional blockchains that handle multiple functions, Celestia specializes in specific roles, which leads to enhanced scalability, flexibility, and interoperability. This specialization enables developers to create blockchain applications for mass adoption​.',
      denom_units: [{
          denom: 'utia',
          exponent: 0
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'utia',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }],
      socials: {
        website: 'https://celestia.org/',
        twitter: 'https://twitter.com/CelestiaOrg'
      }
    }]
};
export default info;