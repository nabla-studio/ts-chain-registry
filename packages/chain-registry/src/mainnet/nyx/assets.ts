import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'nyx',
  assets: [{
      description: 'NYX Token (NYX) is the Nym Network\'s native staking and governance token.',
      denom_units: [{
          denom: 'unyx',
          exponent: 0
        }, {
          denom: 'nyx',
          exponent: 6
        }],
      base: 'unyx',
      name: 'NYX',
      display: 'nyx',
      symbol: 'NYX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png',
          theme: {
            primary_color_hex: '#f45135'
          }
        }],
      type_asset: 'sdk.coin'
    }, {
      description: 'NYM Token (NYM) is the Nym Network\'s native utility token, used as the primary means to incentivize mixnet node operators.',
      denom_units: [{
          denom: 'unym',
          exponent: 0
        }, {
          denom: 'nym',
          exponent: 6
        }],
      base: 'unym',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg'
      },
      coingecko_id: 'nym',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg',
          theme: {
            dark_mode: false,
            circle: true,
            primary_color_hex: '#151525'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.svg',
          theme: {
            dark_mode: true,
            circle: true,
            primary_color_hex: '#141424'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;