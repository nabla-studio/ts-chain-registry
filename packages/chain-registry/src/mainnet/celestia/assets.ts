import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'celestia',
  assets: [{
      description: 'Celestia is a modular blockchain network focused on data availability, allowing developers to deploy their own customizable blockchains with ease.',
      extended_description: 'Celestia is a pioneering blockchain platform that aims to address the scalability and interoperability challenges faced by current blockchain networks. It introduces a modular architecture that separates consensus and data availability from execution, allowing developers to create highly customizable and scalable blockchains. By decoupling these functions, Celestia enables independent blockchains to interact seamlessly while maintaining high throughput and security.\n\nCelestia\'s unique approach includes a consensus and data availability layer that supports multiple execution environments, facilitating a diverse range of decentralized applications (dApps). This design allows for greater flexibility and efficiency, as developers can choose the best execution environment for their specific use case. Celestia\'s focus on modularity and interoperability has the potential to significantly enhance the blockchain ecosystem by enabling more scalable and adaptable solutions.',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }],
      socials: {
        website: 'https://celestia.org/',
        twitter: 'https://twitter.com/CelestiaOrg'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;