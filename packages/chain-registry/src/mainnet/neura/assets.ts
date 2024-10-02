import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'neura',
  assets: [{
      description: 'ANKR: The native EVM, governance, and staking token for Neura, enabling secure transactions, and seamless GPU resourcing within the ecosystem.',
      denom_units: [{
          denom: 'atankr',
          exponent: 0
        }, {
          denom: 'ankr',
          exponent: 18
        }],
      base: 'atankr',
      name: 'Neura',
      display: 'ankr',
      symbol: 'ANKR',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4'
          },
          provider: 'Neura'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ankr.svg'
        }],
      coingecko_id: 'ankr',
      socials: {
        website: 'https://www.ankr.com',
        twitter: 'https://x.com/ankr'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;