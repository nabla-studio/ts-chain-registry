import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sunrise',
  assets: [{
      description: 'The native token of the Sunrise network for staking. This token is non transferrable. This token can be retrieved by providing liquidity.',
      denom_units: [{
          denom: 'uvrise',
          exponent: 0,
          aliases: ['microvRISE', 'microvrise']
        }, {
          denom: 'vrise',
          exponent: 6
        }],
      base: 'uvrise',
      name: 'Sunrise vRISE',
      display: 'vrise',
      symbol: 'vRISE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/vrise.png',
          theme: {
            primary_color_hex: '#a4b4c4'
          }
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        twitter: 'https://twitter.com/SunriseLayer'
      },
      type_asset: 'sdk.coin'
    }, {
      description: 'The native token of the Sunrise network for fees.',
      denom_units: [{
          denom: 'urise',
          exponent: 0,
          aliases: ['microRISE', 'microrise']
        }, {
          denom: 'rise',
          exponent: 6
        }],
      base: 'urise',
      name: 'Sunrise RISE',
      display: 'rise',
      symbol: 'RISE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
          theme: {
            primary_color_hex: '#ecbc64'
          }
        }],
      socials: {
        website: 'https://sunriselayer.io/',
        twitter: 'https://twitter.com/SunriseLayer'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;