import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'pylons',
  assets: [{
      description: 'The revenue token for Pylons',
      denom_units: [{
          denom: 'ubedrock',
          exponent: 0
        }, {
          denom: 'rock',
          exponent: 6
        }],
      base: 'ubedrock',
      name: 'Pylons',
      display: 'rock',
      symbol: 'ROCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png',
          theme: {
            primary_color_hex: '#ec4424'
          }
        }],
      socials: {
        website: 'https://pylons.tech',
        twitter: 'https://twitter.com/pylonstech'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;