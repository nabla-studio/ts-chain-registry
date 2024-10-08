import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'fantom',
  assets: [{
      description: 'Fantom\'s native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.',
      denom_units: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'ftm',
          exponent: 18
        }],
      type_asset: 'evm-base',
      base: 'wei',
      name: 'Fantom',
      display: 'ftm',
      symbol: 'FTM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      },
      coingecko_id: 'fantom',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg',
          theme: {
            primary_color_hex: '#1c6cfc'
          }
        }]
    }, {
      description: 'ERC20 wrapped version of FTM',
      type_asset: 'erc20',
      address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      denom_units: [{
          denom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
          exponent: 0
        }, {
          denom: 'wftm',
          exponent: 18
        }],
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      name: 'Wrapped Fantom',
      display: 'wftm',
      symbol: 'WFTM',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'fantom',
            base_denom: 'wei'
          },
          chain: {
            contract: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Fantom'
        }],
      images: [{
          image_sync: {
            chain_name: 'fantom',
            base_denom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg',
          theme: {
            primary_color_hex: '#1c6cfc'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      }
    }]
};
export default info;