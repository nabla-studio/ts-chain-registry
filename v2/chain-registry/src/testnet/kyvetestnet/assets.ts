import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'kyvetestnet',
  assets: [{
      description: 'The native utility token of the Kaon testnet version of KYVE.',
      denom_units: [{
          denom: 'tkyve',
          exponent: 0
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      base: 'tkyve',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'kyve',
            base_denom: 'ukyve'
          },
          provider: 'Kyve'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          image_sync: {
            chain_name: 'kyve',
            base_denom: 'ukyve'
          }
        }]
    }]
};
export default info;