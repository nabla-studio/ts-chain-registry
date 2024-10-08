import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'xrpl',
  assets: [{
      description: 'Native token of Ripple XRP Ledger',
      extended_description: 'The XRP Ledger: The Blockchain Built for Business\n\nThe XRP Ledger (XRPL) is a decentralized, public blockchain led by a global community of businesses and developers looking to solve problems and create value.\n\nProven reliable over more than a decade of error-free functioning, the XRPL offers streamlined development, low transaction costs, high performance, and sustainability. So you can build with confidence–and move your most critical projects forward.',
      denom_units: [{
          denom: 'drop',
          exponent: 0
        }, {
          denom: 'xrp',
          exponent: 6
        }],
      type_asset: 'unknown',
      base: 'drop',
      name: 'Ripple',
      display: 'xrp',
      symbol: 'XRP',
      coingecko_id: 'ripple',
      socials: {
        website: 'https://xrpl.org/',
        twitter: 'https://twitter.com/Ripple'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg'
      }
    }]
};
export default info;