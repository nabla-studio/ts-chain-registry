import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'archwaytestnet',
  assets: [{
      description: 'The native token of Archway Test Network.',
      denom_units: [
        {
          denom: 'aconst',
          exponent: 0
        },
        {
          denom: 'uconst',
          exponent: 12
        },
        {
          denom: 'const',
          exponent: 18
        }
      ],
      base: 'aconst',
      name: 'Archway',
      display: 'const',
      symbol: 'CONST',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'archway',
            base_denom: 'aarch'
          },
          provider: 'Archway Testnet'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'archway',
            base_denom: 'aarch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg',
          theme: {
            primary_color_hex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      }
    }]
};
export default info;