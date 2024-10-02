import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'qfs',
  assets: [{
      description: 'QFS stands for Quantum Financial Systems, the aim is to bridge traditional finance with the crypto ecosystem',
      extended_description: 'QFS stands for Quantum Financial Systems, a revolutionary concept designed to integrate traditional financial systems with the rapidly evolving world of cryptocurrency and blockchain technology. The primary aim of QFS is to create a seamless interface that allows for the secure, efficient, and transparent exchange of assets between these two financial realms. By leveraging advanced quantum computing capabilities, QFS seeks to enhance the speed and security of transactions, reduce the risk of fraud, and provide a robust framework for financial innovation. This system is poised to transform how we conduct financial operations, offering unprecedented levels of trust and efficiency in the global financial landscape. Through the integration of traditional banking structures with the decentralized nature of cryptocurrencies, QFS aspires to bridge the gap between conventional and digital finance, paving the way for a more inclusive and technologically advanced financial future.',
      denom_units: [{
          denom: 'qfs',
          exponent: 0
        }],
      base: 'qfs',
      name: 'qfs',
      display: 'qfs',
      symbol: 'QFS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.svg',
          theme: {
            primary_color_hex: '#2979dc'
          }
        }],
      socials: {
        website: 'https://qfsone.com/'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;