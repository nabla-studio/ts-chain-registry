import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'neutrontestnet',
  assets: [{
      description: 'The native token of Neutron chain',
      denom_units: [{
          denom: 'untrn',
          exponent: 0
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'untrn',
      name: 'Neutron Testnet',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
        }]
    }]
};
export default info;