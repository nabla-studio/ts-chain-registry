import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'meme',
  assets: [{
      description: 'MEME Token (MEME) is the native staking token of the MEME Chain',
      denom_units: [{
          denom: 'umeme',
          exponent: 0
        }, {
          denom: 'meme',
          exponent: 6
        }],
      base: 'umeme',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      coingecko_id: 'meme-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg',
          theme: {
            primary_color_hex: '#b7dcd8'
          }
        }],
      type_asset: 'sdk.coin'
    }, {
      description: 'The native EVM, governance and staking token of the Planq Network',
      extended_description: 'Planq is the very first cryptocurrency project to keep mobile platform usability at heart, taking a step away from dependency on desktop services. By focusing on easy accessibility and close integration of other blockchains via easy to use bridges, Planq will push Web 3 adoption in the mobile space to the next level.',
      denom_units: [{
          denom: 'ibc/FACC1CE598366EA01D86CF1CBE05F1A6C7511F673E91DEFF04342ED8DEFE3A60',
          exponent: 0
        }, {
          denom: 'planq',
          exponent: 18
        }],
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      type_asset: 'ics20',
      base: 'ibc/FACC1CE598366EA01D86CF1CBE05F1A6C7511F673E91DEFF04342ED8DEFE3A60',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'planq',
            base_denom: 'aplanq',
            channel_id: 'channel-64'
          },
          chain: {
            channel_id: 'channel-11',
            path: 'transfer/channel-11/aplanq'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg',
          image_sync: {
            chain_name: 'planq',
            base_denom: 'aplanq'
          },
          theme: {
            primary_color_hex: '#d4f3fb'
          }
        }]
    }]
};
export default info;