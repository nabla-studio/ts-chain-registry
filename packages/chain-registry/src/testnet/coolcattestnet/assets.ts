import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'coolcattestnet',
  assets: [{
      description: 'CoolCat - The Interchain Gaming Hub. $CCAT is the native token for use in the CoolCat Network.',
      denom_units: [{
          denom: 'uccat',
          exponent: 0
        }, {
          denom: 'ccat',
          exponent: 6
        }],
      base: 'uccat',
      name: 'CoolCat',
      display: 'ccat',
      symbol: 'CCAT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.svg'
      },
      keywords: [
        'nft',
        'staking',
        'games'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;