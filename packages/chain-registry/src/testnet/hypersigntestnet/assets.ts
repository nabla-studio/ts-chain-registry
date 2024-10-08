import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'hypersigntestnet',
  assets: [{
      description: 'Native token for Hypersign Identity Network',
      denom_units: [{
          denom: 'uhid',
          exponent: 0
        }, {
          denom: 'hid',
          exponent: 6
        }],
      base: 'uhid',
      display: 'hid',
      name: 'Hypersign',
      symbol: 'HID',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hypersigntestnet/images/hypersign.png'
      },
      coingecko_id: 'hypersign-identity-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hypersigntestnet/images/hypersign.png'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;