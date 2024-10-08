import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sge',
  assets: [{
      description: 'The native token of SGE Network',
      extended_description: 'The Sports, Gaming, and Entertainment Network (SGE Network) is a Cosmos SDK-based layer-1 blockchain that uses its own native utility token (SGE Token). The SGE Network leverages the modular components, blockchain interoperability and minimal gas fees of the Cosmos-based design to support applications at the intersection of blockchain, sports, gaming and entertainment that are pioneering novel ways of engaging users with a UX, value proposition and utility never before seen in the space.',
      denom_units: [{
          denom: 'usge',
          exponent: 0
        }, {
          denom: 'sge',
          exponent: 6
        }],
      base: 'usge',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      coingecko_id: 'six-sigma',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg',
          theme: {
            primary_color_hex: '#C0A15B',
            background_color_hex: '#00000000',
            circle: false
          }
        }],
      socials: {
        website: 'https://sgenetwork.io/',
        twitter: 'https://x.com/sge_network'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;