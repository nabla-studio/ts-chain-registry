import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'bostrom',
  assets: [
    {
      description: 'The staking token of Bostrom',
      denom_units: [{
          denom: 'boot',
          exponent: 0,
          aliases: ['boot']
        }],
      base: 'boot',
      name: 'Bostrom',
      display: 'boot',
      symbol: 'BOOT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
      },
      coingecko_id: 'bostrom',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg',
          theme: {
            primary_color_hex: '#4cea4e'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'The liquid staking token of Bostrom',
      denom_units: [{
          denom: 'hydrogen',
          exponent: 0,
          aliases: ['hydrogen']
        }],
      base: 'hydrogen',
      name: 'Bostrom Hydrogen',
      display: 'hydrogen',
      symbol: 'HYDROGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg',
          theme: {
            primary_color_hex: '#ffffff'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [{
          denom: 'milliampere',
          exponent: 0,
          aliases: ['milliampere']
        }, {
          denom: 'ampere',
          exponent: 3,
          aliases: ['ampere']
        }],
      base: 'milliampere',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg',
          theme: {
            primary_color_hex: '#f4ecce'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [{
          denom: 'millivolt',
          exponent: 0,
          aliases: ['millivolt']
        }, {
          denom: 'volt',
          exponent: 3,
          aliases: ['volt']
        }],
      base: 'millivolt',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg',
          theme: {
            primary_color_hex: '#fba809'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'The staking token of Cyber',
      denom_units: [{
          denom: 'tocyb',
          exponent: 0,
          aliases: ['tocyb']
        }],
      base: 'tocyb',
      name: 'Bostrom Tocyb',
      display: 'tocyb',
      symbol: 'TOCYB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg',
          theme: {
            primary_color_hex: '#1e8fa9'
          }
        }],
      type_asset: 'sdk.coin'
    }
  ]
};
export default info;