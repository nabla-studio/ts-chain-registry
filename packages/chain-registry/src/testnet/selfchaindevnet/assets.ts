import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'selfchaindevnet',
  assets: [{
      description: 'Self Chain Is the First Modular Intent-Centric Access Layer L1 Blockchain and Keyless Wallet Infrastructure Service That Uses MPC-TSS/AA for Multi-Chain Web3 Access.',
      denom_units: [{
          denom: 'uself',
          exponent: 0
        }, {
          denom: 'self',
          exponent: 6
        }],
      base: 'uself',
      name: 'self',
      display: 'self',
      symbol: 'SELF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/selfchaindevnet/images/selfchain.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/selfchaindevnet/images/selfchain.png'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;